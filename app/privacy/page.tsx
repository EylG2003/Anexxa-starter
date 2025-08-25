export const metadata = { title: "Privacy Policy — Anexxa" };

export default function Page() {
  const today = new Date().toISOString().slice(0,10);
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p><strong>Last updated:</strong> {today}</p>

      <p>
        This Privacy Policy describes how Anexxa (“we”, “us”, “our”) collects, uses, and shares
        information when you use our website and services, including purchasing digital gift cards
        and paying in installments.
      </p>

      <h2>Who we are</h2>
      <p>
        Data Controller: Anexxa. Contact: <a href="mailto:privacy@anexxacard.com">privacy@anexxacard.com</a>.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account & Contact:</strong> name, email, phone (if provided).</li>
        <li><strong>Transaction:</strong> products purchased, amounts, plan, status, and fulfillment data.</li>
        <li><strong>Payments:</strong> processed by Stripe. We never store full card numbers. See <a href="https://stripe.com/privacy">Stripe’s Privacy Policy</a>.</li>
        <li><strong>Technical:</strong> IP, device, browser, cookies, and analytics events.</li>
      </ul>

      <h2>How we use information</h2>
      <ul>
        <li>To process orders, deliver gift-card codes, and manage installment plans.</li>
        <li>To verify identity, prevent fraud, and comply with law.</li>
        <li>To provide support, improve our product, and communicate service updates.</li>
      </ul>

      <h2>Legal bases (EU/UK)</h2>
      <ul>
        <li><strong>Contract:</strong> to provide the services you request.</li>
        <li><strong>Legitimate Interests:</strong> security, fraud prevention, product improvement.</li>
        <li><strong>Consent:</strong> where required (e.g., certain cookies/marketing).</li>
        <li><strong>Legal Obligation:</strong> accounting, regulatory compliance.</li>
      </ul>

      <h2>Sharing</h2>
      <p>
        We share information with service providers (e.g., hosting, analytics, payment processing) under contract.
        We do not sell personal data.
      </p>

      <h2>Cookies & analytics</h2>
      <p>
        We use cookies and similar technologies for core functionality and analytics. You can manage cookies through your browser settings.
      </p>

      <h2>Data retention</h2>
      <p>
        We retain data for as long as necessary to provide services, meet legal obligations, and resolve disputes.
      </p>

      <h2>International transfers</h2>
      <p>
        Where data is transferred internationally, we use appropriate safeguards (e.g., SCCs) as required by law.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have rights to access, correct, delete, or restrict processing of your data,
        and to object or request portability. Contact us at <a href="mailto:privacy@anexxacard.com">privacy@anexxacard.com</a>.
      </p>

      <h2>Children</h2>
      <p>Our services are not directed to children under 13 (or the age required by local law).</p>

      <h2>Changes</h2>
      <p>
        We may update this policy. Material changes will be posted on this page with a new “Last updated” date.
      </p>

      <h2>Contact</h2>
      <p>Email: <a href="mailto:privacy@anexxacard.com">privacy@anexxacard.com</a> · Support: <a href="mailto:support@anexxacard.com">support@anexxacard.com</a></p>
    </main>
  );
}
