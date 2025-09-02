import React from "react";
import Link from "next/link";
import ComplianceNote from "@/components/ComplianceNote";

export default function POSPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-3">Anexxa POS</h1>
      <p className="text-white/80 mb-4">
        A fast, device-agnostic point-of-sale system for merchants. Anexxa connects to
        licensed payment processors (e.g., Stripe; Adyen; Mollie) so you can take
        contactless card payments with Tap to Pay or lightweight terminals. Anexxa does
        not issue financial products.
      </p>
      <ComplianceNote />
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl p-4 bg-white/10">
          <h2 className="font-semibold mb-2">Tap to Pay</h2>
          <p className="text-sm text-white/80">
            Use compatible iPhones and Android devices to accept contactless cards and wallets.
            Availability varies by device, OS, processor, and region.
          </p>
          <Link href="/contact" className="btn btn-primary mt-3 inline-block">Enable Tap to Pay</Link>
        </div>
        <div className="rounded-xl p-4 bg-white/10">
          <h2 className="font-semibold mb-2">Terminals</h2>
          <p className="text-sm text-white/80">
            Works with popular Android POS hardware (PAX, Sunmi) via supported processors.
          </p>
          <Link href="/contact" className="btn btn-secondary mt-3 inline-block">Supported devices</Link>
        </div>
      </div>
    </main>
  );
}
