import { OrdersStore } from '@/lib/orders-store'

export const metadata = { title: 'Orders â€” Dev Only' }

export default function OrdersDevPage() {
  const orders = OrdersStore.listOrders()
  return (
    <div className="section">
      <div className="container-xl space-y-4">
        <div className="space-y-1">
          <p className="badge">Internal</p>
          <h1 className="h1">Orders (dev)</h1>
          <p className="p text-white/70">This page lists in-memory orders for testing. Not visible in navigation.</p>
        </div>

        <div className="card p-4 overflow-auto">
          <table className="w-full text-left small">
            <thead className="text-white/70">
              <tr>
                <th className="py-2 pr-4">ID</th>
                <th className="py-2 pr-4">Brand</th>
                <th className="py-2 pr-4">Amount</th>
                <th className="py-2 pr-4">Plan</th>
                <th className="py-2 pr-4">Code (masked)</th>
                <th className="py-2 pr-4">Created</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(o => {
                const masked = OrdersStore.maskCode(o.code)
                return (
                  <tr key={o.id} className="border-t border-white/10">
                    <td className="py-2 pr-4 font-mono">{o.id}</td>
                    <td className="py-2 pr-4">{o.slug}</td>
                    <td className="py-2 pr-4">â‚¬{o.amount.toFixed(2)}</td>
                    <td className="py-2 pr-4">{o.plan}</td>
                    <td className="py-2 pr-4 font-mono">{masked}</td>
                    <td className="py-2 pr-4">{new Date(o.createdAt).toLocaleString()}</td>
                  </tr>
                )
              })}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="py-4 text-white/60">No orders yet.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

