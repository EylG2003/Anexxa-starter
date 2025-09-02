export const metadata = { title: "Pricing — Anexxa POS" };
export default function Pricing() {
  return (
    <main className="section">
      <div className="container-xl space-y-4">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <p>Simple SaaS pricing for POS software. Payment processing fees are charged by your chosen acquirer.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Starter: $0/mo — basic POS</li>
          <li>Pro: $49/mo — reports, receipts, multi-device</li>
          <li>Scale: Contact us</li>
        </ul>
      </div>
    </main>
  );
}
