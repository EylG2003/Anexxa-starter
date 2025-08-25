# Stripe local setup

Follow these steps to test subscriptions and webhooks locally.

## Prerequisites
- Node 18+
- Stripe account and Stripe CLI

## 1) Install dependencies

```bash
npm install
```

## 2) Configure environment

Create or update `.env.local` with the following keys (examples):

```
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=whsec_...   # set in step 4
```

Restart the dev server after editing env.

## 3) Start the dev server

```bash
npm run dev
```

## 4) Stripe CLI login and listen

Login (one time):

```bash
stripe login
```

Forward webhooks to your local app route:

```bash
stripe listen --forward-to http://localhost:3000/api/stripe/webhook
```

Copy the printed `whsec_...` secret into `.env.local` as `STRIPE_WEBHOOK_SECRET`, then restart the dev server.

## 5) Test the flow

- Open http://localhost:3000/gift-cards
- Pick a brand, choose amount and 3/4/6/12 months
- Click "Continue to payment" and complete the Stripe Checkout
- After success, you should be redirected to `/gift-cards/<slug>/success`

The webhook will:
- Create a Subscription Schedule matching the selected number of iterations
- Reserve a locally stored gift card code and mark the order as active
- Increment cycles on successful invoices

## Notes
- This demo uses local, in-memory storage in `lib/orders-store.ts`; restart will reset orders and inventory.
- Codes are sourced from `data/giftcards.ts` only; no partner APIs are used.
