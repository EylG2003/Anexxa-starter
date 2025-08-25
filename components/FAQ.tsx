export default function FAQ() {
  const qas = [
    { q: "Is Anexxa POS hardware-free?", a: "Yes. Tap to Pay turns mobile devices into terminals. Chip+PIN and QR options are supported via certified readers where required." },
    { q: "Can we white-label BNPL?", a: "Yes. Anexxa supports full brand theming and pricing control for banks and large merchants." },
    { q: "Do you handle KYC/KYB?", a: "We integrate with leading providers; you can bring your own or use ours (roadmap for rollout by region)." },
    { q: "Where do you operate?", a: "Starting EU/UK with phased expansion. Talk to sales for your specific markets." },
  ];
  return (
    <section className="section">
      <p className="h2 text-center mb-8">FAQs</p>
      <div className="grid gap-4">
        {qas.map(({q, a}) => (
          <div key={q} className="card p-6">
            <p className="h3">{q}</p>
            <p className="p mt-2">{a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
