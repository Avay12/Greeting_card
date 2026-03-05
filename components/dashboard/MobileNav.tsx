"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Link as LinkIcon, CreditCard, History } from "lucide-react";

export function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/dashboard", icon: Home },
    { name: "Links", href: "/dashboard/generate-link", icon: LinkIcon },
    { name: "Cards", href: "/dashboard/cards", icon: History },
    { name: "Payment", href: "/dashboard/payment", icon: CreditCard },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border pb-safe shadow-[0_-4px_6px_-1px_rgba(244,63,94,0.08)]">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full min-h-[48px] transition-colors ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <div
                className={`p-1.5 rounded-xl transition-all ${
                  isActive ? "bg-primary/10" : ""
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "stroke-[2.5]" : "stroke-[1.5]"
                  }`}
                />
              </div>
              <span
                className={`text-[10px] mt-0.5 font-medium ${
                  isActive ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
