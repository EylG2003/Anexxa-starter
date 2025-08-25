import Link from 'next/link';

export default function CTA() {
  return (
    <section className="section">
      <div className="card p-10 text-center">
        <p className="h2">Ready to unlock installments and loyalty?</p>
        <p className="p mt-2">Talk to our team about Anexxa POS, or get early access to BNPL.</p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/partners" className="btn btn-primary">Talk to Sales</Link>
          <Link href="/bnpl" className="btn btn-ghost">Get Early Access</Link>
        </div>
      </div>
    </section>
  );
}
