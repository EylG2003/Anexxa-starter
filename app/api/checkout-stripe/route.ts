import { NextRequest, NextResponse } from 'next/server'
import { stripe, SITE_URL } from '@/lib/stripe'
import giftcards from 'data/giftcards'

const VALID_PLANS = new Set([3, 4, 6, 12])

export async function POST(req: NextRequest) {
  try {
    const ct = req.headers.get('content-type') || ''
    let payload: any
    if (ct.includes('application/json')) payload = await req.json()
    else {
      const fd = await req.formData()
      payload = Object.fromEntries(fd.entries())
    }
    const { slug, amount, plan } = payload as { slug: string; amount: string | number; plan: string | number }

    const s = String(slug || '')
    const a = Number(amount)
    const p = Number(plan)

    const gc = giftcards.find(g => g.slug === s)
    if (!gc) return NextResponse.json({ ok: false, error: 'invalid_slug' }, { status: 400 })
    if (!Number.isFinite(a) || a <= 0) return NextResponse.json({ ok: false, error: 'invalid_amount' }, { status: 400 })
    if (!VALID_PLANS.has(p)) return NextResponse.json({ ok: false, error: 'invalid_plan' }, { status: 400 })

    const perInstallmentCents = Math.round((a / p) * 100)

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            unit_amount: perInstallmentCents,
            recurring: { interval: 'month' },
            product_data: { name: `${s.toUpperCase()} Gift Card — ${p} monthly installments` },
          },
          quantity: 1,
        },
      ],
      success_url: `${SITE_URL}/gift-cards/${s}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${SITE_URL}/gift-cards/${s}`,
      client_reference_id: JSON.stringify({ slug: s, amount: a, plan: p }),
    })

    const url = session.url ?? null
    console.log('[checkout] session', { id: session.id, url, mode: session.mode })

    const wantsRedirect =
      !ct.includes('application/json') ||
      new URL(req.url).searchParams.get('redirect') === '1'

    if (!url) return NextResponse.json({ ok: false, error: 'Stripe returned no URL' }, { status: 500 })

    return wantsRedirect
      ? NextResponse.redirect(url, { status: 303 })
      : NextResponse.json({ ok: true, url })
  } catch (err) {
    console.error('[checkout-stripe] error', err)
    return NextResponse.json({ ok: false, error: 'internal_error' }, { status: 500 })
  }
}
