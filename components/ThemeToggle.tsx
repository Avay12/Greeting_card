"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeProvider";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const isSmall = size === "sm";

  return (
    <button
      id="theme-toggle"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      className={cn(
        "relative flex items-center justify-center rounded-full transition-all duration-300",
        "border border-border hover:border-primary/40",
        "bg-muted hover:bg-accent/30",
        "hover:shadow-md hover:shadow-primary/10",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        isSmall ? "h-8 w-8" : "h-9 w-9",
        className,
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.span
            key="sun"
            initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Sun
              className={cn(
                "text-pink-400",
                isSmall ? "w-3.5 h-3.5" : "w-4 h-4",
              )}
            />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={{ opacity: 0, rotate: 90, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.6 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Moon
              className={cn(
                "text-primary",
                isSmall ? "w-3.5 h-3.5" : "w-4 h-4",
              )}
            />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
