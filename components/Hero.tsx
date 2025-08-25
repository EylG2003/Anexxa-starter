import Link from 'next/link';

export default function Hero() {
  return (
    <section className="section gradient">
      <div className="text-center space-y-6">
        <span className="badge">New • POS + BNPL</span>
        <h1 className="h1">Payments that include everyone.</h1>
        <p className="p max-w-2xl mx-auto">
          One platform, two product lines: <strong>Anexxa POS</strong> for banks & merchants,
          and <strong>Anexxa BNPL</strong> for shoppers. Launch installments at checkout, grow revenue, and keep costs low.
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link href="/pos" className="btn btn-primary">For Banks & Merchants</Link>
          <Link href="/bnpl" className="btn btn-ghost">For Shoppers</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card p-6">
            <p className="small">Tap to Pay (Android/iOS)</p>
            <p className="h3 mt-2">No extra hardware</p>
          </div>
          <div className="card p-6">
            <p className="small">Installments</p>
            <p className="h3 mt-2">BNPL at checkout</p>
          </div>
          <div className="card p-6">
            <p className="small">SDK + Sandbox</p>
            <p className="h3 mt-2">Go live in weeks</p>
          </div>
          <div className="card p-6">
            <p className="small">Rewards</p>
            <p className="h3 mt-2">Loyalty that sticks</p>
          </div>
        </div>
      </div>
    </section>
  );
}
