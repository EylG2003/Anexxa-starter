// Helper to access Stripe and site URL
import Stripe from "stripe";

const isProd = process.env.NODE_ENV === "production";

// Server-side secret key
const secretKey = isProd
  ? process.env.STRIPE_SECRET_KEY_LIVE
  : process.env.STRIPE_SECRET_KEY_TEST;

if (!secretKey) {
  throw new Error("Stripe secret key missing. Check .env *_TEST / *_LIVE variables.");
}

export const stripe = new Stripe(secretKey);

// Publishable key for client usage (if needed)
export const getPublishableKey = () =>
  isProd
    ? process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_LIVE
    : process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY_TEST;

// Webhook secret (for /api/stripe/webhook)
export const getWebhookSecret = () =>
  (isProd
    ? process.env.STRIPE_WEBHOOK_SECRET_LIVE
    : process.env.STRIPE_WEBHOOK_SECRET_TEST) || "";

// Site URL
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://anexxa-starter-3imrhzr8i-judgegpts-projects.vercel.app';
