"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Wallet, History, TrendingUp, Plus, ShoppingCart, Loader2 } from "lucide-react";
import { useAuthStore } from "@/store/authStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import api from "@/lib/api";
import { Card, Order } from "@/types/api";

export default function DashboardOverview() {
  const { user } = useAuthStore();
  const [isMounted, setIsMounted] = useState(false);
  
  const [cards, setCards] = useState<Card[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsMounted(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const [cardsRes, ordersRes] = await Promise.all([
        api.get("/cards"),
        api.get("/orders"),
      ]);
      setCards(Array.isArray(cardsRes.data) ? cardsRes.data : cardsRes.data?.cards || []);
      setOrders(Array.isArray(ordersRes.data) ? ordersRes.data : ordersRes.data?.orders || []);
    } catch (error) {
      console.error("Failed to fetch dashboard data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isMounted) return null;

  const totalCards = cards.length;
  const totalSpend = orders.reduce((acc, order) => acc + (order.total_amount || 0), 0);
  const totalOrders = orders.length;
  const userCredit = user?.credit || 0;

  // Compute dynamic chart data
  const generateChartData = () => {
    if (orders.length === 0) {
      return [
        { name: "Week 1", spent: 0 },
        { name: "Week 2", spent: 0 },
        { name: "Week 3", spent: 0 },
        { name: "Week 4", spent: 0 },
      ];
    }
    const sorted = [...orders].sort(
      (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    );
    return sorted.map((o) => ({
      name: new Date(o.created_at).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      spent: o.total_amount,
    }));
  };

  const chartData = generateChartData();
  const completedOrders = orders.filter(o => o.status === "completed" || o.status === "paid");

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-12">
      {/* --- MOBILE VIEW --- */}
      <div className="space-y-6 block md:hidden">
        <div className="pt-2">
          <p className="text-muted-foreground text-sm font-medium">
            Welcome back,
          </p>
          <h1 className="text-2xl font-black text-foreground tracking-tight">
            <span className="text-primary">{user?.name || "User"}</span> 👋
          </h1>
        </div>

        {/* Mobile Wallet Hero Card */}
        <Link href="/dashboard/payment" className="block">
          <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-5 text-white relative overflow-hidden shadow-lg shadow-primary/25">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative">
              <div className="flex items-center gap-2 mb-3">
                <Wallet className="w-5 h-5 text-white/90" />
                <span className="text-sm font-medium text-white/90">
                  Wallet Balance
                </span>
              </div>
              <div className="flex items-end justify-between">
                <p className="text-3xl font-black tracking-tight flex items-start">
                  <span className="text-xl align-top mt-1 mr-0.5">$</span>{userCredit.toFixed(2)}
                </p>
                <button className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-white/20 hover:bg-white/30 transition-colors h-9 px-4 text-sm font-bold text-white border-0 backdrop-blur-sm">
                  <Plus className="w-4 h-4" />
                  Add Funds
                </button>
              </div>
            </div>
          </div>
        </Link>

        {/* Mobile Mini Stats */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm">
            <History className="w-5 h-5 mx-auto mb-1.5 text-primary" />
            <p className="text-lg font-black text-foreground">{totalCards}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
              Total Cards
            </p>
          </div>

          <div className="bg-card border border-border rounded-xl p-3 text-center shadow-sm">
            <TrendingUp className="w-5 h-5 mx-auto mb-1.5 text-emerald-500" />
            <p className="text-lg font-black text-foreground flex items-start justify-center">
              <span className="text-[12px] align-top mt-1 mr-0.5">$</span>{totalSpend.toFixed(2)}
            </p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
              Total Spend
            </p>
          </div>

          <Link
            href="/dashboard/cart"
            className="bg-card border border-border rounded-xl p-3 text-center shadow-sm block hover:bg-muted transition-colors"
          >
            <ShoppingCart className="w-5 h-5 mx-auto mb-1.5 text-primary" />
            <p className="text-lg font-black text-foreground">{totalOrders}</p>
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground mt-0.5">
              Total Carts
            </p>
          </Link>
        </div>

        {/* Mobile Recent Activity */}
        <div className="space-y-4 pt-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-foreground">
              Recent Activity
            </h2>
          </div>
          {orders.length > 0 ? (
            <div className="flex flex-col gap-3">
              {orders.slice(0, 3).map((o) => (
                <div key={o.id} className="bg-card border border-border rounded-2xl p-4 shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold">Order #{o.id}</p>
                    <p className="text-xs text-muted-foreground">{new Date(o.created_at).toLocaleDateString()}</p>
                  </div>
                  <p className="text-sm font-bold text-primary">${o.total_amount.toFixed(2)}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-sm">
              <History className="w-10 h-10 mx-auto mb-3 text-primary/20" />
              <p className="text-sm font-medium text-muted-foreground mb-4">
                No activity yet
              </p>
              <Link href="/dashboard/generate-link">
                <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary hover:bg-primary/90 transition-colors h-10 px-5 text-sm font-bold text-white shadow-md shadow-primary/25">
                  Browse Cards
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* --- DESKTOP VIEW --- */}
      {/* Welcome Header */}
      <div className="hidden md:block">
        <h1 className="text-3xl font-black text-foreground tracking-tight">
          Welcome back,{" "}
          <span className="text-primary">{user?.name || "User"}</span>!
        </h1>
        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Here's an overview of your account and quick actions.
        </p>
      </div>

      {/* Desktop Quick Stats Grid */}
      <div className="hidden md:grid gap-6 md:grid-cols-3">
        {/* Card 1: Wallet */}
        <div className="rounded-[2rem] border border-border bg-card shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-shadow">
          <div className="p-8 pb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Wallet
              </p>
              <p className="text-3xl font-black text-foreground">${userCredit.toFixed(2)}</p>
            </div>
            <div className="flex-shrink-0 h-14 w-14 rounded-[1rem] bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <Wallet className="h-6 w-6 text-emerald-500" />
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <Link href="/dashboard/payment" className="block w-full">
              <button className="w-full flex justify-center items-center gap-2 rounded-xl bg-muted border border-border py-3 text-sm font-bold text-primary hover:bg-muted/80 transition-colors">
                <Plus className="h-4 w-4" /> Add Funds
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2: Total Cards */}
        <div className="rounded-[2rem] border border-border bg-card shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-shadow">
          <div className="p-8 pb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Total Cards
              </p>
              <div className="text-3xl font-black text-foreground flex items-center gap-3">
                {totalCards}
                {isLoading && <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />}
              </div>
            </div>
            <div className="flex-shrink-0 h-14 w-14 rounded-[1rem] bg-primary/10 flex items-center justify-center border border-primary/20">
              <History className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <Link href="/dashboard/cards" className="block w-full">
              <button className="w-full flex justify-center items-center gap-2 rounded-xl bg-muted border border-border py-3 text-sm font-bold text-primary hover:bg-muted/80 transition-colors">
                View History <span className="text-base leading-none">→</span>
              </button>
            </Link>
          </div>
        </div>

        {/* Card 3: Total Spend */}
        <div className="rounded-[2rem] border border-border bg-card shadow-sm flex flex-col justify-between overflow-hidden hover:shadow-md hover:shadow-primary/5 transition-shadow">
          <div className="p-8 pb-6 flex items-start justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                Total Spend
              </p>
              <div className="text-3xl font-black text-foreground flex items-center gap-3">
                ${totalSpend.toFixed(2)}
                {isLoading && <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />}
              </div>
            </div>
            <div className="flex-shrink-0 h-14 w-14 rounded-[1rem] bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
              <svg
                className="h-6 w-6 text-amber-500"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
              </svg>
            </div>
          </div>
          <div className="px-6 pb-6 mt-auto">
            <button className="w-full flex justify-center items-center gap-2 rounded-xl bg-muted border border-border py-3 text-sm font-bold text-primary hover:bg-muted/80 transition-colors">
              View Perks <span className="text-base leading-none">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Analytics Chart Section */}
      <div className="hidden md:flex rounded-[2rem] border border-border bg-card shadow-sm overflow-hidden flex-col lg:flex-row">
        {/* Left Side: Chart */}
        <div className="p-8 lg:w-2/3 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
          <div className="flex justify-between items-start mb-8">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-[0.8rem] bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center shadow-md shadow-primary/25">
                <TrendingUp className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-foreground">
                  Purchases Analytics
                </h2>
                <p className="text-xs font-medium text-muted-foreground mt-0.5">
                  All-time performance
                </p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-black text-primary">${totalSpend.toFixed(2)}</p>
              <p className="text-xs font-bold text-muted-foreground mt-1 uppercase tracking-wider">
                Total Volume
              </p>
            </div>
          </div>

          <div className="h-[250px] w-full mt-auto">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={chartData}
                margin={{ top: 10, right: 0, left: -20, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorSpent" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--primary)"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--primary)"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: "var(--muted-foreground)",
                    fontSize: 12,
                    fontWeight: 600,
                  }}
                  dy={10}
                />
                <YAxis hide={true} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "1rem",
                    border: "1px solid var(--border)",
                    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                    background: "var(--card)",
                  }}
                  itemStyle={{ color: "var(--primary)", fontWeight: 800 }}
                  labelStyle={{
                    color: "var(--foreground)",
                    fontWeight: 600,
                    marginBottom: "4px",
                  }}
                  formatter={(value) => [`$${value}`, "Amount"]}
                />
                <Area
                  type="monotone"
                  dataKey="spent"
                  stroke="var(--primary)"
                  strokeWidth={4}
                  fillOpacity={1}
                  fill="url(#colorSpent)"
                  activeDot={{ r: 8, strokeWidth: 0, fill: "var(--primary)" }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Right Side: Total Delivered */}
        <div className="p-8 lg:w-1/3 bg-muted/40 flex flex-col">
          <p className="text-sm font-bold text-muted-foreground mb-8 uppercase tracking-widest">
            Delivered Orders
          </p>

          <div className="flex-1 flex flex-col gap-4 overflow-y-auto max-h-[300px] pr-2 custom-scrollbar">
            {completedOrders.length > 0 ? (
              completedOrders.map(order => (
                <div key={order.id} className="bg-card border border-border rounded-xl p-4 shadow-sm">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-foreground">Order #{order.id}</span>
                    <span className="text-xs font-semibold text-green-500 bg-green-500/10 px-2.5 py-0.5 rounded-full">
                      {order.status}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {new Date(order.created_at).toLocaleDateString()}
                  </p>
                  <p className="text-sm font-black text-primary mt-1">
                    ${order.total_amount.toFixed(2)}
                  </p>
                </div>
              ))
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <p className="text-sm font-semibold text-muted-foreground text-center">
                  No completed orders yet
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
