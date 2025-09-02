import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section gradient">
      <div className="text-center space-y-6">
        <h1 className="h1">Turn any phone into a POS.</h1>
        <p className="p max-w-2xl mx-auto">
          <strong>Anexxa POS</strong> lets merchants accept in-person card payments with Tap to Pay and lightweight terminals. 
          No dongles. No hardware lock-in.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/pos" className="btn btn-primary">Get Started</Link>
          <Link href="/contact" className="btn btn-ghost">Contact Sales</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="card p-6">
            <p className="small">Tap to Pay</p>
            <p className="h3 mt-2">On iPhone & Android</p>
          </div>
          <div className="card p-6">
            <p className="small">Android POS</p>
            <p className="h3 mt-2">For PAX/Sunmi</p>
          </div>
          <div className="card p-6">
            <p className="small">Instant Setup</p>
            <p className="h3 mt-2">Via Stripe</p>
          </div>
        </div>
      </div>
    </section>
  );
}
