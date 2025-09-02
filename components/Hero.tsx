import Link from "next/link";
import ComplianceNote from "./ComplianceNote";

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Turn any phone into a POS.
      </h1>
      <p className="text-lg text-white/80 mb-6">
        Accept in-person card payments with Tap to Pay and lightweight terminals.
        No dongles. No hardware lock-in.
      </p>
      <div className="flex items-center justify-center gap-3 mb-3">
        <Link href="/pos" className="btn btn-primary">Get Started</Link>
        <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
      </div>
      <div className="mt-4 text-sm text-white/80">
        <div className="flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center rounded-full px-3 py-1 bg-white/10">
            Tap to Pay on iPhone & Android*
          </span>
          <span className="inline-flex items-center rounded-full px-3 py-1 bg-white/10">
            Android POS (PAX / Sunmi)
          </span>
          <span className="inline-flex items-center rounded-full px-3 py-1 bg-white/10">
            Instant setup via Stripe
          </span>
        </div>
        <ComplianceNote />
      </div>
    </section>
  );
}
