export const metadata = { title: "Privacy Policy — Anexxa" };

export default function Page() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {today}
      </p>

      <p>
        At Anexxa, your privacy and security are paramount. This policy explains how we collect,
        use, and protect your data when you purchase prepaid vouchers through our platform.
      </p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li>Personal information (name, email, billing details).</li>
        <li>
          Payment details (processed securely by Stripe; Anexxa never stores card numbers).
        </li>
        <li>Device, IP, and cookies for fraud prevention.</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>To process prepaid voucher orders.</li>
        <li>To deliver vouchers once installments are fully paid.</li>
        <li>To comply with AML, fraud prevention, and legal obligations.</li>
        <li>To provide support and improve services.</li>
      </ul>

      <h2>3. Payments</h2>
      <p>
        All payments are processed by <strong>Stripe Payments UK/Europe</strong>. Anexxa does
        <strong> not</strong> issue credit, loans, or BNPL products. Installment payments are handled
        as <strong>subscriptions</strong>, not financing.
      </p>

      <h2>4. AML &amp; Security</h2>
      <ul>
        <li>3D Secure authentication applied to all payments.</li>
        <li>Transactions over €250 may require ID verification.</li>
        <li>Suspicious transactions are flagged and may be reported to regulators.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <ul>
        <li>Stripe (for secure payment processing).</li>
        <li>Trusted providers (hosting, analytics, email).</li>
        <li>Regulators if legally required.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>
        You may request access, correction, or deletion of your data, and withdraw consent for
        marketing.
      </p>

      <h2>7. Contact</h2>
      <p>
        Email: <a href="mailto:support@anexxa.com">support@anexxa.com</a>
      </p>
    </main>
  );
}
