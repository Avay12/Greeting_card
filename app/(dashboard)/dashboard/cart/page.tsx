"use client";

import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Trash2,
  Plus,
  Minus,
  CreditCard,
} from "lucide-react";
import { useStore } from "@/store/useStore";
import Image from "next/image";

import { useRouter } from "next/navigation";
import api from "@/lib/api";
import { Loader2 } from "lucide-react";

export default function CartPage() {
  const router = useRouter();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [activeTab, setActiveTab] = useState<"cart" | "favorites">("cart");
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartTotal,
    favorites,
    toggleFavorite,
    clearCart,
  } = useStore();

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);
    try {
      const orderItems = cart.map((item) => ({
        card_id: typeof item.id === "string" ? parseInt(item.id) : item.id,
        quantity: item.quantity,
      }));

      await api.post("/orders", {
        items: orderItems,
      });

      alert("Order placed successfully!");
      clearCart();
      router.push("/dashboard");
    } catch (error: any) {
      alert(error.response?.data?.error || "Failed to place order.");
    } finally {
      setIsCheckingOut(false);
    }
  };

  // We need to fetch favorite product details if we had a real API.
  // For demo, we just show their IDs or a placeholder if the ID isn't in cart.
  const favoriteItems = favorites.map((favId) => {
    const inCart = cart.find((item) => item.id === favId);
    if (inCart) return inCart;
    return {
      id: favId,
      name: `Saved Item #${favId.substring(0, 4)}`,
      price: 0,
      image: "",
      category: "Saved",
    };
  });

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Your Selection</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your cart items and saved favorites.
        </p>
      </div>

      <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
        {/* Tabs Header */}
        <div className="flex border-b border-border bg-muted/40">
          <button
            onClick={() => setActiveTab("cart")}
            className={`flex flex-1 items-center justify-center border-b-2 px-4 py-4 text-sm font-semibold transition-colors ${
              activeTab === "cart"
                ? "border-primary text-primary bg-card"
                : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> My Cart ({cart.length})
          </button>
          <button
            onClick={() => setActiveTab("favorites")}
            className={`flex flex-1 items-center justify-center border-b-2 px-4 py-4 text-sm font-semibold transition-colors ${
              activeTab === "favorites"
                ? "border-primary text-primary bg-card"
                : "border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
          >
            <Heart className="mr-2 h-4 w-4" /> Saved Favorites (
            {favorites.length})
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 md:p-8">
          {activeTab === "cart" && (
            <div className="lg:flex lg:gap-8">
              {/* Cart Items List */}
              <div className="flex-1 space-y-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShoppingCart className="h-16 w-16 text-muted/20 mb-4" />
                    <h3 className="text-lg font-medium text-foreground">
                      Your cart is empty
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Looks like you haven't added anything yet.
                    </p>
                  </div>
                ) : (
                  <div className="divide-y divide-border">
                    {cart.map((item) => (
                      <div key={item.id} className="flex py-6">
                        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-border bg-muted">
                          {item.image ? (
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-full w-full object-cover"
                            />
                          ) : (
                            <div className="h-full w-full bg-muted-foreground/10"></div>
                          )}
                        </div>
                        <div className="ml-4 flex flex-1 flex-col">
                          <div>
                            <div className="flex justify-between text-base font-medium text-foreground">
                              <h3>{item.name}</h3>
                              <p className="ml-4">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {item.category}
                            </p>
                          </div>
                          <div className="flex flex-1 items-end justify-between text-sm">
                            <div className="flex items-center rounded-md border border-border bg-muted">
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                className="px-2 py-1 text-muted-foreground hover:text-primary"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="px-2 font-medium">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                className="px-2 py-1 text-muted-foreground hover:text-primary"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeFromCart(item.id)}
                              className="font-medium text-red-500 hover:text-red-700 flex items-center"
                            >
                              <Trash2 className="mr-1 h-4 w-4" /> Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Order Summary */}
              {cart.length > 0 && (
                <div className="mt-8 lg:mt-0 lg:w-80 border-t border-border lg:border-t-0 lg:border-l pl-0 lg:pl-8 pt-8 lg:pt-0">
                  <h2 className="text-lg font-medium text-foreground">
                    Order Summary
                  </h2>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <p className="text-muted-foreground">Subtotal</p>
                      <p className="font-medium text-foreground">
                        ${cartTotal().toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-sm border-b border-border pb-4">
                      <p className="text-muted-foreground">Tax</p>
                      <p className="font-medium text-foreground">
                        ${(cartTotal() * 0.08).toFixed(2)}
                      </p>
                    </div>
                    <div className="flex items-center justify-between text-base font-bold text-foreground">
                      <p>Total</p>
                      <p>${(cartTotal() * 1.08).toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="mt-8">
                    <button
                      onClick={handleCheckout}
                      disabled={isCheckingOut}
                      className="flex w-full items-center justify-center rounded-xl bg-primary px-6 py-3 text-base font-bold shadow-md shadow-primary/20 hover:bg-primary/90 text-white transition-colors disabled:opacity-50"
                    >
                      {isCheckingOut ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          <CreditCard className="mr-2 h-5 w-5" /> Checkout
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "favorites" && (
            <div>
              {favorites.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Heart className="h-16 w-16 text-muted/20 mb-4" />
                  <h3 className="text-lg font-medium text-foreground">
                    No favorites yet
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Save items you like to view them here later.
                  </p>
                </div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {favoriteItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative rounded-xl border border-border p-4 hover:shadow-md transition-all bg-card"
                    >
                      <button
                        onClick={() => toggleFavorite(item.id)}
                        className="absolute top-2 right-2 z-10 rounded-full bg-background p-1.5 shadow-sm text-red-500 hover:text-red-700 border border-border"
                      >
                        <Heart className="h-4 w-4 fill-current" />
                      </button>
                      <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted mb-4">
                        {item.image ? (
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                            No Image
                          </div>
                        )}
                      </div>
                      <h3 className="text-sm font-medium text-foreground truncate">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.price
                          ? `$${item.price.toFixed(2)}`
                          : "Prices Vary"}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
