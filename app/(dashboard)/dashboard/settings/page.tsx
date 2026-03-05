"use client";

import { useState } from "react";
import { User, Lock, Save, Mail, Hash, Calendar } from "lucide-react";
import { useAuthStore } from "@/store/authStore";

export default function SettingsPage() {
  const { user } = useAuthStore();

  // Security Form State
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSecuritySave = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert("New passwords do not match.");
      return;
    }
    // Simulate save
    alert("Password updated successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  // Mocking data if user is not fully populated yet
  const displayEmail = user?.email || "user@example.com";
  const displayName = user?.name || "User";
  const accountId = "DB59B759-815"; // Mock ID mapping to screenshot
  const memberSince = "February 1, 2026";

  return (
    <div className="mx-auto max-w-6xl space-y-8 pb-12">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Profile Information Card */}
        <div className="rounded-[2rem] border border-border bg-card shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="p-8 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <User className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Profile Information
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Your account details
            </p>
          </div>

          <div className="p-8 space-y-4 flex-1">
            {/* Email Block */}
            <div className="flex items-center bg-muted/50 rounded-[1.5rem] p-4 border border-border/50">
              <div className="h-10 w-10 bg-card rounded-xl shadow-sm flex items-center justify-center mr-4 border border-border">
                <Mail className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  Email
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {displayEmail}
                </span>
              </div>
            </div>

            {/* Account ID Block */}
            <div className="flex items-center bg-muted/50 rounded-[1.5rem] p-4 border border-border/50">
              <div className="h-10 w-10 bg-card rounded-xl shadow-sm flex items-center justify-center mr-4 border border-border">
                <Hash className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  Account ID
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {accountId}
                </span>
              </div>
            </div>

            {/* Name Block */}
            <div className="flex items-center bg-muted/50 rounded-[1.5rem] p-4 border border-border/50">
              <div className="h-10 w-10 bg-card rounded-xl shadow-sm flex items-center justify-center mr-4 border border-border">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  Name
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {displayName}
                </span>
              </div>
            </div>

            {/* Member Since Block */}
            <div className="flex items-center bg-muted/50 rounded-[1.5rem] p-4 border border-border/50">
              <div className="h-10 w-10 bg-card rounded-xl shadow-sm flex items-center justify-center mr-4 border border-border">
                <Calendar className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
                  Member Since
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {memberSince}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Change Password Card */}
        <div className="rounded-[2rem] border border-border bg-card shadow-sm overflow-hidden flex flex-col h-full hover:shadow-md transition-shadow">
          <div className="p-8 pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <Lock className="h-6 w-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                Change Password
              </h2>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Update your account password
            </p>
          </div>

          <form
            onSubmit={handleSecuritySave}
            className="p-8 space-y-6 flex-1 flex flex-col"
          >
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-muted border-2 border-transparent rounded-[1.25rem] p-4 text-sm font-bold text-foreground focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-muted border-2 border-transparent rounded-[1.25rem] p-4 text-sm font-bold text-foreground focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-foreground mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full bg-muted border-2 border-transparent rounded-[1.25rem] p-4 text-sm font-bold text-foreground focus:bg-card focus:border-primary/50 focus:ring-4 focus:ring-primary/20 outline-none transition-all"
                  required
                />
              </div>
            </div>

            <div className="pt-8 mt-auto flex justify-start">
              <button
                type="submit"
                className="flex justify-center items-center rounded-xl bg-primary px-8 py-4 text-sm font-black tracking-wide text-white shadow-lg shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all text-center"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
