import { NextRequest } from 'next/server'
import { stripe, getWebhookSecret } from "x-not-used"
import { OrdersStore } from '@/lib/orders-store'

export async function POST(req: NextRequest) {
  const sig = req.headers.get('stripe-signature') || ''
  const whSecret = getWebhookSecret()

  let event: any
  try {
    const raw = await req.text()
    event = stripe.webhooks.constructEvent(raw, sig, whSecret)
  } catch (err) {
    console.error('[stripe][webhook] signature verification failed', err)
    return new Response('ok', { status: 200 })
  }

  try {
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as {
          id: string
          subscription?: string
          client_reference_id?: string
        }
        const ref = session.client_reference_id ? JSON.parse(session.client_reference_id) : null as any
        const slug: string = ref?.slug
        const amount: number = Number(ref?.amount)
        const plan: number = Number(ref?.plan)
        const subscriptionId = String(session.subscription || '')

        if (!slug || !amount || !plan || !subscriptionId) break

        // Retrieve subscription to get price id
        const sub = await stripe.subscriptions.retrieve(subscriptionId)
        const priceId = sub.items.data[0]?.price?.id

        // Create a schedule to auto-cancel after N iterations
        let scheduleId: string | undefined
        if (priceId) {
          const sched = await stripe.subscriptionSchedules.create({
            from_subscription: subscriptionId,
            end_behavior: 'cancel',
            phases: [
              {
                items: [{ price: priceId }],
                iterations: plan,
              },
            ],
          })
          scheduleId = sched.id
        }

        // Create local order and attach subscription/schedule
        const orderId = OrdersStore.createOrder({ slug, amount, plan })
        OrdersStore.attachStripe(orderId, { subscriptionId, scheduleId })
        OrdersStore.markStatus(orderId, 'active')

        // Reserve and attach a gift card code
        const fullCode = OrdersStore.reserveCode(slug)
        if (fullCode) {
          const order = OrdersStore.get(orderId)
          if (order) order.code = fullCode
        }

        break
      }

      case 'invoice.payment_succeeded': {
        const invoice = event.data.object as { subscription?: string }
        const subId = String(invoice.subscription || '')
        if (!subId) break

        const order = OrdersStore.findBySubscriptionId(subId)
        if (!order) break

        const cycles = OrdersStore.incrementCycles(order.id)

        // If no schedule and we've reached intended plan, cancel at period end
        if (!order.stripe?.scheduleId && cycles >= order.plan) {
          await stripe.subscriptions.update(subId, { cancel_at_period_end: true })
        }
        break
      }

      case 'invoice.payment_failed': {
        const invoice = event.data.object as { subscription?: string }
        const subId = String(invoice.subscription || '')
        if (!subId) break
        const order = OrdersStore.findBySubscriptionId(subId)
        if (order) OrdersStore.markStatus(order.id, 'late')
        break
      }

      default:
        // ignore others for now
        break
    }
  } catch (err) {
    console.error('[stripe][webhook] handler error', err)
  }

  return new Response('ok', { status: 200 })
}

