export default function StatBar() {
  const stats = [
    { label: "Integration time", value: "2–6 weeks" },
    { label: "Uptime", value: "99.9%" },
    { label: "Avg. approval lift", value: "+18%" },
    { label: "Merchant NPS", value: "72" }
  ];
  return (
    <section className="section">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-6 text-center">
            <p className="h3">{s.value}</p>
            <p className="small mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
