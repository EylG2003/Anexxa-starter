import { NextRequest, NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripeSecretKey = process.env.STRIPE_SECRET_KEY

if (!stripeSecretKey) {
  console.warn('[checkout] Missing STRIPE_SECRET_KEY env var')
}

const stripe = new Stripe(stripeSecretKey || '', {
  apiVersion: '2023-10-16',
})

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''

    let productName = ''
    let amount: number | null = null
    let installments: number | null = null

    if (contentType.includes('application/json')) {
      const json = await req.json().catch(() => ({}))
      productName = String(json.productName || '')
      amount = Number(json.amount)
      installments = Number(json.installments)
    } else {
      const form = await req.formData().catch(() => null)
      if (form) {
        productName = String(form.get('productName') || '')
        amount = Number(form.get('amount'))
        installments = Number(form.get('installments'))
      }
    }

    if (!productName || !Number.isFinite(amount!) || !Number.isFinite(installments!)) {
      return NextResponse.json({ error: 'invalid_request' }, { status: 400 })
    }

    if (!stripeSecretKey) {
      return NextResponse.json({ error: 'server_misconfigured' }, { status: 500 })
    }

    const successUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/success`
    const cancelUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/cancel`

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: { name: productName },
            unit_amount: Math.round((amount as number) * 100),
          },
          quantity: 1,
        },
      ],
      payment_method_options: { card: { installments: { enabled: true } } },
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[checkout] error', err)
    return NextResponse.json({ error: 'internal_error' }, { status: 500 })
  }
}
