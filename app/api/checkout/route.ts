export async function POST(req: Request) {
  return Response.json({ ok: true, message: "Checkout stub. Processor handled via /pos." });
}
export async function GET() {
  return Response.json({ ok: true, message: "Use POST for checkout." });
}
