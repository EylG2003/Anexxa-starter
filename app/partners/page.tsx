export const metadata = { title: "Partners — Anexxa POS" };
export default function Partners() {
  return (
    <main className="section">
      <div className="container-xl space-y-4">
        <h1 className="text-3xl font-bold">Partners</h1>
        <p>We work with licensed acquirers and device vendors.</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Stripe (Tap to Pay, Terminal)</li>
          <li>PAX & Sunmi (Android POS)</li>
          <li>More coming soon</li>
        </ul>
      </div>
    </main>
  );
}
