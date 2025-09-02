import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Anexxa POS",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main style={{maxWidth:860, margin:"40px auto", padding:"0 20px", lineHeight:1.6}}>
      <h1>Terms of Service</h1>
      <p><strong>Effective Date:</strong> {new Date().toISOString().slice(0,10)}</p>

      <h2>1. Service Description</h2>
      <p>
        Anexxa provides <strong>point‑of‑sale (POS) software</strong> that enables merchants to accept
        in‑person card payments, including Tap to Pay and certified terminals. Anexxa is a software provider; it is not a bank, lender, or money transmitter.
      </p>

      <h2>2. No Financial Products</h2>
      <p>
        Anexxa <strong>does not</strong> offer lending, credit issuance, stored value, gift cards, vouchers, or BNPL/"pay later" products. All payments are processed by third‑party payment processors.
      </p>

      <h2>3. Payments & Processing</h2>
      <ul>
        <li>Payments are processed by <strong>Stripe</strong>. Card data is handled by Stripe; Anexxa does not store card numbers.</li>
        <li>Funds settle directly to the merchant’s connected Stripe account. Anexxa does not hold or control customer funds.</li>
        <li>Strong Customer Authentication (e.g., 3D Secure) may be required per scheme/regulatory rules.</li>
      </ul>

      <h2>4. Merchant Responsibilities</h2>
      <ul>
        <li>Comply with applicable card network rules and local laws.</li>
        <li>Provide accurate business information and maintain account security.</li>
        <li>Handle customer support and refunds in accordance with your policies and law.</li>
      </ul>

      <h2>5. Refunds</h2>
      <p>
        Refunds are initiated by the merchant through their payment processor (e.g., Stripe). Anexxa provides tools and integrations but does not issue refunds directly.
      </p>

      <h2>6. Security</h2>
      <ul>
        <li>Payment processing is PCI DSS compliant via Stripe.</li>
        <li>Anexxa implements industry‑standard security controls to protect service availability.</li>
      </ul>

      <h2>7. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Anexxa is not liable for indirect, incidental, or consequential damages, or for losses arising from third‑party services.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update these Terms from time to time. Continued use of the services constitutes acceptance of the updated Terms.
      </p>

      <h2>9. Governing Law</h2>
      <p>These Terms are governed by the laws applicable in the company’s place of establishment, without regard to conflict‑of‑law principles.</p>

      <h2>10. Contact</h2>
      <p>Email: <a href="mailto:support@anexxa.com">support@anexxa.com</a></p>
    </main>
  );
}
