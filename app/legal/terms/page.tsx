import React from "react";

export default function Terms() {
  const today = new Date().toISOString().slice(0, 10);

  return (
    <main className="max-w-3xl mx-auto px-6 py-12 prose">
      <h1>Terms of Service</h1>
      <p>
        <strong>Last updated:</strong> {today}
      </p>

      <h2>About Anexxa</h2>
      <p>
        Anexxa provides point-of-sale (POS) software and related merchant tools. We enable
        merchants to accept card payments via approved third-party payment processors and to
        manage checkout, receipts, analytics, and loyalty features.
      </p>

      <h2>No Financial Products</h2>
      <p>
        Anexxa does <em>not</em> issue or manage stored value, open-loop gift cards, prepaid cards,
        lending, credit, or buy-now-pay-later products. We do not hold customer funds.
      </p>

      <h2>Payment Processing</h2>
      <p>
        Payments are processed by third-party, licensed acquirers (for example, Stripe and other
        partners). Settlement of funds occurs directly from the processor to the merchant in
        accordance with the processor&apos;s terms. Anexxa is not a money transmitter or payment
        institution.
      </p>

      <h2>Merchant Responsibilities</h2>
      <ul>
        <li>Operate in compliance with applicable card network and processor rules.</li>
        <li>Provide accurate product and pricing information and fulfill orders.</li>
        <li>Maintain lawful use of the Services and applicable PCI obligations.</li>
      </ul>

      <h2>Prohibited Use</h2>
      <p>
        Use of Anexxa for financial services (credit, BNPL, stored value, cash equivalents,
        or open-loop gift cards) is prohibited. Anexxa may suspend or terminate access for breach.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of the Services after changes
        take effect constitutes acceptance.
      </p>

      <h2>Contact</h2>
      <p>For questions about these Terms, contact: partners@anexxacard.com</p>
    </main>
  );
}

