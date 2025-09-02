/** Super-simple in-memory order store (dev/demo only) */
export type Order = {
  id: string;
  amount: number;
  status: "created" | "paid" | "refunded" | "failed";
  created: number;
  meta?: Record<string, unknown>;
};

const _orders: Order[] = [];

/** Named export expected by app/orders/page.tsx */
export class OrdersStore {
  /** Keep both names so any import style compiles */
  static add(o: Order) { _orders.push(o); }
  static addOrder(o: Order) { this.add(o); }

  static list(): Order[] { return _orders.slice().reverse(); }
  static listOrders(): Order[] { return this.list(); }

  static clear() { _orders.length = 0; }
  static clearOrders() { this.clear(); }
}

/** Convenience named functions (if other code uses them) */
export function addOrder(o: Order) { OrdersStore.addOrder(o); }
export function listOrders(): Order[] { return OrdersStore.listOrders(); }
export function clearOrders() { OrdersStore.clearOrders(); }

/** Default export also provided (some files might import default) */
export default OrdersStore;
