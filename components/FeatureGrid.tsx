export default function FeatureGrid() {
  const features = [
    { title: "Installments Everywhere", desc: "Offer BNPL at POS, online checkout, and QR — with a single integration." },
    { title: "Tap to Pay", desc: "Turn phones into terminals on Android/iOS. No extra hardware needed." },
    { title: "Fraud & Risk Controls", desc: "Built-in rules engine and KYB/KYC integrations (roadmap)." },
    { title: "Developer-First", desc: "Simple SDKs, webhooks, and a sandbox that unblocks your team fast." },
    { title: "Rewards Engine", desc: "Attach loyalty and offers to every transaction. Drive repeat purchases." },
    { title: "White-Label Ready", desc: "Brand the entire experience for your bank or merchant network." }
  ];
  return (
    <section className="section">
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card p-6">
            <p className="h3">{f.title}</p>
            <p className="p mt-2">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
