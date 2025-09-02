import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="card p-10 text-center">
        <p className="h2">Ready to start accepting payments?</p>
        <p className="p mt-2">Get started with Anexxa POS today and turn any device into a payment terminal.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/contact" className="btn btn-primary">Contact Sales</Link>
          <Link href="/pos" className="btn btn-ghost">Get Started</Link>
        </div>
      </div>
    </section>
  );
}

