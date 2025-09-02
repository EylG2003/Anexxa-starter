import Stripe from "stripe";

// Safe wrapper: if no secret key is set, export a null-like client.
// Code using `stripe` must check for truthiness before calling.
export const stripe: Stripe | null = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY, {
      // Use a recent API version; adjust if you need a specific one.
      apiVersion: "2024-06-20" as any,
    })
  : null;
