/** Super-simple in-memory order store (dev/demo only) */
export type Order = {
  id: string;
  amount: number;
  status: "created" | "paid" | "refunded" | "failed";
  created: number;
  code?: string; // optional code shown masked in UI
  meta?: Record<string, unknown>;
};

const _orders: Order[] = [];

/** Named export expected by app/orders/page.tsx */
export class OrdersStore {
  /** Add */
  static add(o: Order) { _orders.push(o); }
  static addOrder(o: Order) { this.add(o); }

  /** List */
  static list(): Order[] { return _orders.slice().reverse(); }
  static listOrders(): Order[] { return this.list(); }

  /** Clear */
  static clear() { _orders.length = 0; }
  static clearOrders() { this.clear(); }

  /** Mask a code like ABCD-1234 → ****-1234 (keeps last 4) */
  static maskCode(code?: string): string {
    if (!code) return "";
    const clean = String(code).replace(/\s+/g, "");
    if (clean.length <= 4) return clean;
    const last4 = clean.slice(-4);
    const masked = "*".repeat(Math.max(0, clean.length - 4)) + last4;
    // if code had dashes, reinsert a dash before the last 4 for readability
    return /-/.test(code) ? masked.slice(0, -4) + "-" + last4 : masked;
  }
}

/** Convenience named functions */
export function addOrder(o: Order) { OrdersStore.addOrder(o); }
export function listOrders(): Order[] { return OrdersStore.listOrders(); }
export function clearOrders() { OrdersStore.clearOrders(); }

/** Default export also provided */
export default OrdersStore;
