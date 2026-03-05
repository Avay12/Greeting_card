"use client";

import { useState } from "react";
import {
  Edit2,
  Trash2,
  Search,
  Link as LinkIcon,
  Plus,
  ShoppingCart,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock Data
const mockCards = [
  {
    id: "1",
    name: "Netflix Premium - Family",
    category: "Entertainment",
    date: "2024-03-15",
    clicks: 145,
    status: "active",
    image:
      "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=100&auto=format&fit=crop&q=60",
  },
  {
    id: "2",
    name: "Amazon Prime Summer Sale",
    category: "Shopping",
    date: "2024-03-10",
    clicks: 89,
    status: "active",
    image:
      "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=100&auto=format&fit=crop&q=60",
  },
  {
    id: "3",
    name: "VPN Service - Annual",
    category: "Services",
    date: "2024-02-28",
    clicks: 230,
    status: "inactive",
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=100&auto=format&fit=crop&q=60",
  },
];

export default function CardLinksPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = mockCards.filter(
    (card) =>
      card.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.category.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-12">
      {/* Top Section: Browse Cards Banner */}
      <div className="rounded-[2rem] bg-card border border-border shadow-sm p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 justify-between transition-all hover:shadow-md">
        {/* Left: Icon & Text Bundle */}
        <div className="flex items-center gap-6 w-full md:w-auto text-center md:text-left">
          {/* Prominent Plus Icon Box */}
          <div className="hidden sm:flex flex-shrink-0 w-16 h-16 rounded-[1.25rem] bg-gradient-to-br from-primary to-secondary items-center justify-center shadow-lg shadow-primary/25 text-white transform transition-transform hover:scale-105">
            <Plus className="h-8 w-8" strokeWidth={3} />
          </div>

          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-foreground">
              Browse Cards
            </h2>
            <p className="mt-1 text-sm font-medium text-muted-foreground">
              Explore occasions and design your perfect customized card to
              generate a unique link.
            </p>
          </div>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex flex-row items-center w-full md:w-auto gap-4">
          <Link href="/dashboard/generate-link" className="flex-1 md:flex-none">
            <button className="w-full flex justify-center items-center gap-2 rounded-[1rem] bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all hover:-translate-y-0.5 whitespace-nowrap">
              <LinkIcon className="h-4 w-4" /> Generate Link
            </button>
          </Link>
          <Link href="/dashboard/cart" className="flex-1 md:flex-none">
            <button className="w-full flex justify-center items-center gap-2 rounded-[1rem] bg-muted border border-border px-6 py-3.5 text-sm font-bold text-primary shadow-sm hover:bg-muted/80 transition-colors whitespace-nowrap">
              <ShoppingCart className="h-4 w-4" /> View Cart
            </button>
          </Link>
        </div>
      </div>

      <div className="mt-8 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-foreground">
              Your Generated Links
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Manage and track performance.
            </p>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
              <Search className="h-4 w-4 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search links..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full sm:w-72 rounded-[1.25rem] border-2 border-transparent bg-muted/60 py-3.5 pl-10 pr-4 text-sm font-bold text-foreground focus:bg-card focus:border-primary/20 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-muted-foreground placeholder:font-semibold"
            />
          </div>
        </div>

        <div className="overflow-hidden rounded-[1.5rem] border border-border bg-card shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-border">
              <thead className="bg-muted/50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Link Details
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Performance
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Date Created
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-xs font-bold uppercase tracking-widest text-muted-foreground"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {filteredCards.length > 0 ? (
                  filteredCards.map((card) => (
                    <tr
                      key={card.id}
                      className="hover:bg-muted/50 transition-colors"
                    >
                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-[1rem] border border-border shadow-sm">
                            <img
                              src={card.image}
                              alt=""
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-bold text-foreground">
                              {card.name}
                            </div>
                            <div className="flex items-center mt-1 text-xs font-semibold text-primary hover:text-primary/80 cursor-pointer">
                              <LinkIcon className="mr-1 h-3 w-3" />
                              joygreetly.com/ref/{card.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5">
                        <span className="inline-flex rounded-xl bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                          {card.category}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5">
                        <div className="text-sm font-bold text-foreground flex items-center gap-1.5">
                          {card.clicks}{" "}
                          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                            clicks
                          </span>
                        </div>
                        <div className="text-xs mt-1">
                          {card.status === "active" ? (
                            <span className="text-green-500 font-bold flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500" />{" "}
                              Active
                            </span>
                          ) : (
                            <span className="text-muted-foreground font-bold flex items-center gap-1">
                              <div className="w-1.5 h-1.5 rounded-full bg-border" />{" "}
                              Inactive
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-5 text-sm font-semibold text-muted-foreground">
                        {card.date}
                      </td>
                      <td className="whitespace-nowrap px-6 py-5 text-right text-sm font-medium">
                        <div className="flex items-center justify-end space-x-2">
                          <button
                            className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all"
                            title="Edit"
                          >
                            <Edit2 className="h-4 w-4" />
                          </button>
                          <button
                            className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                            title="Delete"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-sm font-semibold text-muted-foreground"
                    >
                      No card links found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
