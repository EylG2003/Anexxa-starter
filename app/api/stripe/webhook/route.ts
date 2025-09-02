/** Stubbed Stripe webhook: accepts POST and returns 200 without processing. */
export async function POST(req: Request) {
  return new Response('ok', { status: 200 });
}
