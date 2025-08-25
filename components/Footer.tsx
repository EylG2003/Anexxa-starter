import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20">
      <div className="container-xl py-10 grid gap-8 md:grid-cols-4 text-white/80">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <div className="size-9 grid place-items-center rounded-xl bg-white/10 border border-white/20">
              <span className="text-xl">⚖️</span>
            </div>
            <span className="font-semibold tracking-wide">Anexxa</span>
          </div>
          <p className="text-sm text-white/60">Payments that include everyone — POS for banks and BNPL for shoppers.</p>
        </div>
        <div>
          <p className="font-semibold mb-3">Products</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/pos" className="hover:underline">Anexxa POS</Link></li>
            <li><Link href="/bnpl" className="hover:underline">Anexxa BNPL</Link></li>
            <li><Link href="/partners" className="hover:underline">Partner Portal</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Company</p>
          <ul className="space-y-2 text-sm">
            <li><a className="hover:underline" href="#">About</a></li>
            <li><a className="hover:underline" href="#">Careers</a></li>
            <li><a className="hover:underline" href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-3">Legal</p>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" href="/terms">Terms</Link></li>
            <li><Link className="hover:underline" href="/privacy">Privacy</Link></li>
            <li><Link className="hover:underline" href="/refunds">Refunds</Link></li>
          </ul>
        </div>
      </div>
      <div className="container-xl py-6 text-xs text-white/50 border-t border-white/10">
        &copy; {new Date().getFullYear()} Anexxa. All rights reserved.
      </div>
    </footer>
  );
}
