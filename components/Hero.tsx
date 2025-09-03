import Link from "next/link";

export default function Hero() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Turn any phone into a POS.
          </h1>
          <p className="text-lg text-white/90">
            Accept in-person card payments with Tap to Pay and lightweight terminals.
            No dongles. No hardware lock-in.
          </p>
          <div className="flex gap-3">
            <Link href="/pos" className="btn btn-primary">Get Started</Link>
            <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
          </div>

          <div className="flex gap-6 pt-2 text-sm">
            <div>
              <div className="font-semibold">Tap to Pay</div>
              <div className="text-white/80">On iPhone & Android</div>
            </div>
            <div>
              <div className="font-semibold">Android POS</div>
              <div className="text-white/80">PAX / Sunmi</div>
            </div>
            <div>
              <div className="font-semibold">Instant Setup</div>
              <div className="text-white/80">via Stripe</div>
            </div>
          </div>
        </div>

        {/* Safe external image (no Next config needed) */}
        <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20">
          <img
            src="https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=1400&auto=format&fit=crop"
            alt="Anexxa POS in action"
            className="w-full h-[360px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
