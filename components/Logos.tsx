export default function Logos() {
  const items = ["Visa", "Mastercard", "Stripe", "Adyen", "Revolut", "Apple Pay", "Google Pay"];
  return (
    <section className="section">
      <p className="small text-center mb-6">Built for the networks and providers you already use</p>
      <div className="container-xl grid grid-cols-2 md:grid-cols-7 gap-4 opacity-70">
        {items.map((x) => (
          <div key={x} className="card p-4 text-center">{x}</div>
        ))}
      </div>
    </section>
  );
}

