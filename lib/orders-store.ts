import { giftCards, type GiftCard } from '../data/giftcards';

export type StripeMeta = { subscriptionId: string; scheduleId?: string };

export type Order = {
  id: string;
  slug: string;
  amount: number;
  plan: number;
  code: string | null;
  createdAt: number;
  status: 'active'|'late'|'paid';
  cyclesPaid: number;
  // legacy fields kept for compatibility
  subscriptionId?: string;
  scheduleId?: string;
  // new nested Stripe meta
  stripe?: StripeMeta;
};

class OrdersStoreClass {
  public orders: Order[] = [];

  private findProduct(slug: string): GiftCard | undefined {
    return giftCards.find(g => g.slug === slug);
  }

  reserveCode(slug: string): string | null {
    const product = this.findProduct(slug);
    if (!product) return null;
    if (!product.codes || product.codes.length === 0) return null;
    const code = product.codes.shift() || null;
    return code || null;
  }

  maskCode(code: string | null | undefined): string {
    if (!code) return '••••';
    const parts = code.split('-');
    if (parts.length < 3) {
      const first4 = code.slice(0, 4);
      const last4 = code.slice(-4);
      return `${first4}••••${last4}`;
    }
    const first = parts[0];
    const lastSeg = parts[parts.length - 1];
    const last4 = lastSeg.slice(-4);
    const middle = parts.slice(1, -1).map(() => '****');
    return [first, ...middle, last4].join('-');
  }

  addOrder(order: Order) {
    this.orders.push(order);
  }

  getOrderById(id: string): Order | undefined {
    return this.orders.find(o => o.id === id);
  }

  listOrders(): Order[] {
    return [...this.orders].sort((a,b) => b.createdAt - a.createdAt);
  }

  createOrder(input: { slug: string; amount: number; plan: number }): string {
    const id = `ANX-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;
    const order: Order = {
      id,
      slug: input.slug,
      amount: input.amount,
      plan: input.plan,
      createdAt: Date.now(),
      status: 'active',
      cyclesPaid: 0,
      code: null,
    };
    this.addOrder(order);
    return id;
  }

  attachStripe(orderId: string, data: { subscriptionId?: string; scheduleId?: string }) {
    const o = this.getOrderById(orderId);
    if (!o) return;
    // keep legacy flat fields for compatibility
    if (data.subscriptionId) o.subscriptionId = data.subscriptionId;
    if (data.scheduleId) o.scheduleId = data.scheduleId;
    // set nested stripe meta as the new source of truth
    if (data.subscriptionId || data.scheduleId) {
      o.stripe = {
        subscriptionId: data.subscriptionId || o.stripe?.subscriptionId || '',
        scheduleId: data.scheduleId ?? o.stripe?.scheduleId,
      };
    }
  }

  markStatus(orderId: string, status: 'active'|'late'|'paid') {
    const o = this.getOrderById(orderId);
    if (!o) return;
    o.status = status;
  }

  incrementCycles(orderId: string): number {
    const o = this.getOrderById(orderId);
    if (!o) return 0;
    o.cyclesPaid = (o.cyclesPaid || 0) + 1;
    if (o.cyclesPaid >= o.plan) {
      o.status = 'paid';
    }
    return o.cyclesPaid;
  }

  findBySubscriptionId(subId: string): Order | undefined {
    return this.orders.find(o => o.stripe?.subscriptionId === subId || o.subscriptionId === subId);
  }

  get(orderId: string): Order | undefined {
    return this.getOrderById(orderId);
  }
}

export const OrdersStore = new OrdersStoreClass();
