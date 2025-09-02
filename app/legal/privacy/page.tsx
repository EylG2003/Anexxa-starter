export const metadata = { title: "Privacy Policy â€” Anexxa POS" };

export default function Page() {
  const today = new Date().toISOString().slice(0, 10);
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Effective Date:</strong> {today}
      </p>

      <p>
        At Anexxa POS, we are committed to protecting your privacy. This policy explains how we collect,
        use, and protect your data when you use our point-of-sale services.
      </p>

      <h2>1. Data We Collect</h2>
      <ul>
        <li>Business information (business name, contact details, tax ID).</li>
        <li>Payment processing details (handled securely by Stripe).</li>
        <li>Transaction data (purchase amounts, timestamps, payment methods).</li>
        <li>Device and usage data for service optimization.</li>
      </ul>

      <h2>2. How We Use Your Data</h2>
      <ul>
        <li>To process and record transactions.</li>
        <li>To provide and improve our POS services.</li>
        <li>For customer support and account management.</li>
        <li>To comply with legal and regulatory requirements.</li>
      </ul>

      <h2>3. Payments</h2>
      <p>
        All payments are processed by <strong>Stripe</strong>. Anexxa POS does not store or process
        card data directly. We use secure payment processing to ensure your transactions are protected.
      </p>

      <h2>4. Security Measures</h2>
      <ul>
        <li>End-to-end encryption for all transactions.</li>
        <li>PCI DSS compliant payment processing.</li>
        <li>Regular security audits and monitoring.</li>
      </ul>

      <h2>5. Data Sharing</h2>
      <ul>
        <li>Stripe (for secure payment processing).</li>
        <li>Trusted service providers (hosting, analytics, support).</li>
        <li>When required by law or to protect our rights.</li>
      </ul>

      <h2>6. Your Rights</h2>
      <p>
        You may request access to, correction of, or deletion of your personal data. You can also
        object to or restrict certain data processing activities.
      </p>

      <h2>7. Contact Us</h2>
      <p>
        For privacy-related inquiries, please contact us at{' '}
        <a href="mailto:privacy@anexxapos.com">privacy@anexxapos.com</a>
      </p>
    </main>
  );
}

