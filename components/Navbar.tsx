"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-transparent border-b border-white/20">
      <div className="container-xl flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="size-9 grid place-items-center rounded-xl bg-white/10 border border-white/20">
            <span className="text-xl">⚖️</span>
          </div>
          <span className="font-semibold tracking-wide">Anexxa POS</span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          <Link href="/" className="px-3 py-2 rounded-full text-sm hover:bg-white/5">Home</Link>
          <Link href="/pos" className="px-3 py-2 rounded-full text-sm hover:bg-white/5">POS System</Link>
          <Link href="/pricing" className="px-3 py-2 rounded-full text-sm hover:bg-white/5">Pricing</Link>
          <Link href="/partners" className="px-3 py-2 rounded-full text-sm hover:bg-white/5">Partners</Link>
          <Link href="/contact" className="px-3 py-2 rounded-full text-sm hover:bg-white/5">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="btn btn-secondary">Contact Sales</Link>
          <Link href="/pos" className="btn btn-primary">Get Started</Link>
        </div>
      </div>
    </header>
  );
}
