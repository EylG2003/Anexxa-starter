import { stripe } from '@/lib/stripe'
import { OrdersStore } from '@/lib/orders-store'

export default async function GiftCardSuccessPage({ params, searchParams }: { params: { slug: string }, searchParams: { [key: string]: string | string[] | undefined } }) {
  const slug = params.slug
  const sessionId = String(searchParams.session_id || '')

  let order = undefined as ReturnType<typeof OrdersStore.get>
  try {
    if (sessionId) {
      const session = await stripe.checkout.sessions.retrieve(sessionId)
      const subscriptionId = String(session.subscription || '')
      if (subscriptionId) order = OrdersStore.findBySubscriptionId(subscriptionId)
    }
  } catch {}

  if (!order) {
    return (
      <div className="section">
        <div className="container-xl space-y-4">
          <div className="card p-4 bg-emerald-500/10 border border-emerald-400/30 text-emerald-100">
            Installments scheduled. We are finalizing your order.
          </div>
          <a href={`/gift-cards/${slug}`} className="btn btn-secondary">Back</a>
        </div>
      </div>
    )
  }

  const per = order.plan ? (order.amount / order.plan) : 0
  const masked = OrdersStore.maskCode(order.code)
  const schedule = Array.from({ length: order.plan }, (_, i) => ({
    n: i + 1,
    date: new Date(Date.now() + i * 30 * 24 * 60 * 60 * 1000),
    amount: per,
  }))

  return (
    <div className="section">
      <div className="container-xl space-y-6">
        <div className="space-y-2">
          <p className="badge">Approved</p>
          <h1 className="h1">Installments scheduled</h1>
          <p className="p">Order <span className="font-mono">{order.id}</span></p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-6 space-y-3">
            <p className="h3">Your gift card</p>
            {order.code ? (
              <p>Your gift card code: <span className="font-mono">{masked}</span></p>
            ) : (
              <p>Code pending — we’ll email it after payment confirmation.</p>
            )}
            <p className="small text-white/70">Keep this code safe. Treat it like cash.</p>
          </div>

          <div className="card p-6 space-y-3">
            <p className="h3">Repayment schedule</p>
            <div className="grid grid-cols-3 gap-2 small">
              <div className="text-white/70">Due date</div>
              <div className="text-white/70">Installment</div>
              <div className="text-white/70">Amount</div>
              {schedule.map(row => (
                <>
                  <div key={`d-${row.n}`}>{row.date.toLocaleDateString()}</div>
                  <div key={`i-${row.n}`}>#{row.n}</div>
                  <div key={`a-${row.n}`}>€{row.amount.toFixed(2)}</div>
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <a href="/gift-cards" className="btn btn-secondary">Buy another gift card</a>
          <a href="/orders" className="btn btn-ghost">View my orders</a>
        </div>
      </div>
    </div>
  )
}
