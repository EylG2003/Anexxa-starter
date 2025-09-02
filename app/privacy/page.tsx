import React from "react";

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 prose">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Summary:</strong> Anexxa provides POS software only. We do not issue stored value,
        gift cards, lending, or BNPL products. Payments are processed by licensed acquirers
        (for example, Stripe) who act as the data controller for payment data they process.
        We act as a processor for merchant POS data.
      </p>
      <p>
        For full details, see our <a href="/legal/privacy">Privacy</a> and{" "}
        <a href="/legal/terms">Terms</a>.
      </p>
    </main>
  );
}
