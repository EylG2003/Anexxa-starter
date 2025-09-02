export default function StatBar() {
  const stats = [
    { label: "Average setup time", value: "Under 5 min" },
    { label: "Transaction speed", value: "< 2 sec" },
    { label: "Uptime", value: "99.9%" },
    { label: "Customer satisfaction", value: "4.8/5" }
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

