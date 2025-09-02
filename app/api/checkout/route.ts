export const runtime = 'nodejs'

import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  if (!stripe) {
    return Response.json(
      { ok: false, error: "stripe_not_configured", message: "Set STRIPE_SECRET_KEY in env." },
      { status: 500 }
    );
  }

  // Minimal placeholder: accept request and return ok=true.
  // (Implement PaymentIntents later; this keeps build/runtime stable.)
  return Response.json({ ok: true });
}

export async function GET() {
  return Response.json({ ok: true, message: "Use POST for checkout." });
}
