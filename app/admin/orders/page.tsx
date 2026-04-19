"use client";

import { useEffect, useState } from "react";
import { useAdminDataStore } from "@/store/adminDataStore";
import { ShoppingBag, Loader2, CheckCircle2, Clock, Trash2, Pencil, X, Save } from "lucide-react";
import type { Order as OrderType } from "@/types/api";

// ─── Edit Order Modal ────────────────────────────────────────────────────────
function EditOrderModal({
  order,
  onClose,
  onSave,
}: {
  order: OrderType;
  onClose: () => void;
  onSave: (id: number, status: string) => Promise<void>;
}) {
  const [status, setStatus] = useState(order.status);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      await onSave(order.id, status);
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.error || "Failed to update order");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl p-6 mx-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-foreground">Update Order Status</h2>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center gap-4 p-3 bg-muted/50 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
              #{order.id}
            </div>
            <div>
              <div className="text-sm font-semibold">{order.user?.name}</div>
              <div className="text-xs text-muted-foreground">${order.total_amount.toFixed(2)}</div>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-sm font-medium text-foreground">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition cursor-pointer"
            >
              <option value="pending">Pending</option>
              <option value="paid">Paid</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>

          {error && (
            <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg">
              {error}
            </p>
          )}

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 disabled:opacity-60 transition-colors"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Save Status
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Delete Order Modal ──────────────────────────────────────────────────────
function DeleteOrderConfirmModal({
  order,
  onClose,
  onConfirm,
}: {
  order: OrderType;
  onClose: () => void;
  onConfirm: (id: number) => Promise<void>;
}) {
  const [deleting, setDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDelete() {
    setDeleting(true);
    setError(null);
    try {
      await onConfirm(order.id);
      onClose();
    } catch (err: any) {
      setError(err?.response?.data?.error || "Failed to delete order");
      setDeleting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="w-full max-w-sm bg-card border border-border rounded-2xl shadow-2xl p-6 mx-4 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center">
            <Trash2 className="w-5 h-5 text-destructive" />
          </div>
          <h2 className="text-lg font-bold text-foreground">Delete Order</h2>
        </div>

        <p className="text-sm text-muted-foreground mb-2">
          Are you sure you want to delete order{" "}
          <span className="font-semibold text-foreground">#{order.id}</span>?
        </p>
        <p className="text-xs text-muted-foreground mb-5">
          This action is permanent and cannot be undone.
        </p>

        {error && (
          <p className="text-sm text-destructive bg-destructive/10 px-3 py-2 rounded-lg mb-4">
            {error}
          </p>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 rounded-xl border border-border text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-destructive text-destructive-foreground text-sm font-medium hover:bg-destructive/90 disabled:opacity-60 transition-colors"
          >
            {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function AdminOrdersPage() {
  const { orders, fetchOrders, isLoading, error, updateOrder, deleteOrder } = useAdminDataStore();
  const [editTarget, setEditTarget] = useState<OrderType | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<OrderType | null>(null);

  useEffect(() => {
    fetchOrders();
  }, [fetchOrders]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground font-heading">
            Orders
          </h1>
          <p className="mt-2 text-muted-foreground">
            View and manage all system orders and generated links.
          </p>
        </div>
        <div className="bg-primary/10 text-primary px-4 py-2 rounded-xl font-bold flex items-center gap-2">
          <ShoppingBag className="w-5 h-5" />
          {orders.length} Total Orders
        </div>
      </div>

      <div className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden">
        {isLoading ? (
          <div className="flex items-center justify-center p-12 text-muted-foreground gap-3">
            <Loader2 className="w-6 h-6 animate-spin" />
            <p>Loading orders...</p>
          </div>
        ) : error ? (
          <div className="p-12 text-center text-destructive bg-destructive/10">
            {error}
          </div>
        ) : orders.length === 0 ? (
          <div className="p-12 text-center text-muted-foreground">
            No orders found.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-muted text-muted-foreground font-medium border-b border-border">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Total Amount</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Created Date</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border text-foreground">
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="hover:bg-muted/50 transition-colors group"
                  >
                    <td className="px-6 py-4 font-medium text-foreground">
                      #{order.id.toString().padStart(5, "0")}
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-foreground">
                        {order.user?.name || "Unknown User"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {order.user?.email}
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-foreground">
                      ${order.total_amount.toFixed(2)}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
                          order.status === "paid" ||
                          order.status === "completed"
                            ? "bg-green-500/10 text-green-500"
                            : order.status === "cancelled"
                            ? "bg-red-500/10 text-red-500"
                            : "bg-yellow-500/10 text-yellow-500"
                        }`}
                      >
                         {order.status === "paid" || order.status === "completed" ? (
                          <CheckCircle2 className="w-3 h-3" />
                         ) : order.status === "cancelled" ? (
                          <X className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      {order.items?.length || 0} item(s)
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(order.created_at).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => setEditTarget(order)}
                          title="Update Status"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteTarget(order)}
                          title="Delete Order"
                          className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editTarget && (
        <EditOrderModal
          order={editTarget}
          onClose={() => setEditTarget(null)}
          onSave={updateOrder}
        />
      )}

      {deleteTarget && (
        <DeleteOrderConfirmModal
          order={deleteTarget}
          onClose={() => setDeleteTarget(null)}
          onConfirm={deleteOrder}
        />
      )}
    </div>
  );
}
