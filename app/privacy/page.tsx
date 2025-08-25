export const metadata = { title: "Privacy Policy — Anexxa" };

export default function Page() {
  const d = new Date();
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Privacy Policy</h1>
      <p><strong>Effective date:</strong> {d.toISOString().slice(0,10)}</p>
      <p>We respect your privacy. This policy explains what personal data we collect, how we use it, and your rights.</p>
      <h2>What we collect</h2>
      <ul>
        <li>Account details you provide (name, email, phone).</li>
        <li>Order & payment info (processed by Stripe; card details never touch our servers).</li>
        <li>Usage, device and cookie data to improve our services.</li>
      </ul>
      <h2>How we use data</h2>
      <ul>
        <li>To process purchases and deliver gift cards.</li>
        <li>To provide installments, support, fraud prevention, and compliance.</li>
        <li>To improve our products and communications.</li>
      </ul>
      <h2>Sharing</h2>
      <p>We share data with service providers (e.g., Stripe for payments) under contract. We do not sell personal data.</p>
      <h2>Your rights</h2>
      <p>You may request access, correction, deletion, or restriction. Contact us at <strong>support@anexxacard.com</strong>.</p>
      <h2>Security</h2>
      <p>We use technical and organizational measures appropriate to the risk. No method is 100% secure.</p>
      <h2>Contact</h2>
      <p>Email: <strong>support@anexxacard.com</strong></p>
    </main>
  );
}
