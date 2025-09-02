export default function FeatureGrid() {
  const features = [
    { title: "Tap to Pay", desc: "Accept contactless payments on iPhone and Android devices with just a tap." },
    { title: "Android POS App", desc: "Full-featured POS app for Android devices and compatible card readers." },
    { title: "Instant Setup", desc: "Get started in minutes with Stripe integration and instant onboarding." },
    { title: "No Extra Hardware", desc: "Use existing devices or choose from our recommended card readers." },
    { title: "Real-time Reporting", desc: "Track sales, inventory, and customer data in real-time." },
    { title: "Secure Payments", desc: "End-to-end encryption and PCI compliance built-in." }
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
