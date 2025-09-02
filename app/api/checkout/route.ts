import { NextRequest, NextResponse } from 'next/server'
import { stripe, SITE_URL } from '@/lib/stripe'

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') || ''

    let productName = ''
    let amount: number | null = null

    if (contentType.includes('application/json')) {
      const json = await req.json().catch(() => ({}))
      productName = String(json.productName || '')
      amount = Number(json.amount)
    } else {
      const form = await req.formData().catch(() => null)
      if (form) {
        productName = String(form.get('productName') || '')
        amount = Number(form.get('amount'))
      }
    }

    if (!productName || !Number.isFinite(amount!)) {
      return NextResponse.json({ error: 'invalid_request' }, { status: 400 })
    }

    const successUrl = `${SITE_URL}/success`
    const cancelUrl = `${SITE_URL}/cancel`

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
      payment_method_options: {
        card: {
          request_three_d_secure: 'any',
        },
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
    })

    return NextResponse.json({ url: session.url })
  } catch (err) {
    console.error('[checkout] error', err)
    return NextResponse.json({ error: 'internal_error' }, { status: 500 })
  }
}
