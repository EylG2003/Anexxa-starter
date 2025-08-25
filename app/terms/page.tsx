export const metadata = { title: "Terms of Service — Anexxa" };

export default function TermsPage() {
  const d = new Date();
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Terms of Service</h1>
      <p><strong>Effective date:</strong> {d.toISOString().slice(0,10)}</p>
      <p>Welcome to Anexxa. By using our website and services, you agree to these Terms.</p>
      <h2>Service</h2>
      <ul>
        <li>We sell gift cards and offer installments (“installment plan”) via our payment processor Stripe.</li>
        <li>Eligibility and approval are subject to checks. We may refuse or cancel at our discretion.</li>
      </ul>
      <h2>Installments</h2>
      <ul>
        <li>When you choose an installment plan, you authorize recurring charges until the plan completes.</li>
        <li>Missed payments may pause access to new purchases or incur late handling as allowed by law.</li>
      </ul>
      <h2>Refunds</h2>
      <p>See our Refund Policy. Some brands’ gift cards may be non-refundable once delivered/redeemed.</p>
      <h2>Acceptable use</h2>
      <p>No fraud, abuse, or unlawful activity. We may suspend accounts violating these Terms.</p>
      <h2>Limitation of liability</h2>
      <p>To the extent permitted by law, we are not liable for indirect or incidental damages.</p>
      <h2>Changes</h2>
      <p>We may update these Terms. Continued use constitutes acceptance of changes.</p>
      <h2>Contact</h2>
      <p>Email: <strong>support@anexxacard.com</strong></p>
    </main>
  );
}
