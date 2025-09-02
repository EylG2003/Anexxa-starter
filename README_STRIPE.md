# Anexxa — POS-Only Web App

Anexxa provides point-of-sale (POS) software and merchant tools.  
**No lending, BNPL, gift cards, vouchers, or stored value.** Payments are processed by licensed acquirers (e.g., Stripe, Adyen, Mollie), with settlement directly to merchants.

---

## Tech Stack
- Next.js 14 (App Router)
- TypeScript + React
- API routes under `app/api/*`
- Vercel for hosting

## Local Setup

```bash
git clone https://github.com/EylG2003/Anexxa-starter.git
cd Anexxa-starter
npm ci
cp .env.example .env.local   # if you have one; otherwise create .env.local as needed
npm run dev

