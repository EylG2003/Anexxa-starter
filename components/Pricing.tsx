export default function Pricing() {
  const tiers = [
    { name: "Starter", price: "Free", points: ["Sandbox access", "Docs & SDKs", "Email support"] },
    { name: "Growth", price: "Custom", points: ["Volume pricing", "White-label", "Dedicated manager"] },
    { name: "Enterprise", price: "Custom", points: ["SLA & uptime", "Custom risk rules", "On-prem options"] },
  ];
  return (
    <section className="section">
      <p className="h2 text-center mb-8">Simple, scalable pricing</p>
      <div className="grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="card p-8">
            <p className="h3">{t.name}</p>
            <p className="text-4xl font-bold mt-2">{t.price}</p>
            <ul className="mt-4 space-y-2">
              {t.points.map(p => <li key={p} className="p">• {p}</li>)}
            </ul>
            <button className="btn btn-primary w-full mt-6">Choose</button>
          </div>
        ))}
      </div>
    </section>
  );
}
