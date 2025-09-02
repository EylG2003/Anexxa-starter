export const metadata = { title: "Refund Policy â€” Anexxa" };
export default function RefundsPage() {
  const d = new Date();
  return (
    <main className="section container-xl prose prose-invert">
      <h1>Refund Policy</h1>
      <p><strong>Effective date:</strong> {d.toISOString().slice(0,10)}</p>
      <h2>Digital gift cards</h2>
      <ul>
        <li>Refunds are not guaranteed once a code is delivered or redeemed.</li>
        <li>If a code is defective or cannot be redeemed, contact us within 14 days for replacement or refund review.</li>
      </ul>
      <h2>Installment purchases</h2>
      <ul>
        <li>If your purchase is cancelled before code delivery, we will reverse the charge or refund amounts paid.</li>
        <li>Once a code is delivered, refunds depend on the brandâ€™s policy and redemption status.</li>
      </ul>
      <h2>How to request</h2>
      <p>Contact <strong>support@anexxacard.com</strong> with your order ID and details. We reply within 3â€“5 business days.</p>
    </main>
  );
}

