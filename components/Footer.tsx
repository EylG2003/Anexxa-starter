import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Brand */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Anexxa</h3>
          <p className="text-sm">
            Turn any device into a secure, modern point-of-sale. 
            Fast checkout, simple integrations, and merchant-first design.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/pos" className="hover:underline">POS</Link></li>
            <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
            <li><Link href="/partners" className="hover:underline">Partners</Link></li>
            <li><Link href="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li><Link href="/legal/terms" className="hover:underline">Terms of Service</Link></li>
            <li><Link href="/legal/privacy" className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Anexxa POS Ltd. All rights reserved.
      </div>
    </footer>
  );
}
