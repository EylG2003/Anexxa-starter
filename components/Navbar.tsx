'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cx } from '@/lib/utils';

export default function Navbar() {
  const pathname = usePathname();
  const link = (href: string, label: string) => (
    <Link
      href={href}
      className={cx(
        "px-3 py-2 rounded-full text-sm",
        pathname === href ? "bg-white/10" : "hover:bg-white/5"
      )}
    >
      {label}
    </Link>
  );
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent border-b border-white/20">
      <div className="container-xl flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 grid place-items-center rounded-xl bg-white/10 border border-white/20">
            <span className="text-xl">âš–ï¸</span>
          </div>
          <span className="font-semibold tracking-wide">Anexxa POS</span>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {link('/', 'Home')}
          {link('/pos', 'POS System')}
          {link('/pricing', 'Pricing')}
          {link('/partners', 'Partners')}
          {link('/contact', 'Contact')}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
          <Link href="/pos" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

