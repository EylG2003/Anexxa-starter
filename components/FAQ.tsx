export default function FAQ() {
  const qas = [
    { 
      q: "What devices are supported for Tap to Pay?", 
      a: "Anexxa POS supports Tap to Pay on iPhone (iOS 16.4 or later) and compatible Android devices. For Android, we support most NFC-enabled devices running Android 9.0 or later." 
    },
    { 
      q: "Which card readers are compatible with Anexxa POS?", 
      a: "We're compatible with most major Android card readers including PAX and Sunmi devices. Contact our sales team for a complete list of certified devices." 
    },
    { 
      q: "How quickly can I start accepting payments?", 
      a: "You can sign up and start accepting payments in minutes. Just download the app, complete the quick setup, and connect your Stripe account." 
    },
    { 
      q: "What payment methods do you support?", 
      a: "We support all major credit and debit cards, including contactless payments (Apple Pay, Google Pay), and physical cards with chip & PIN or magstripe." 
    },
  ];
  return (
    <section className="section">
      <p className="h2 text-center mb-8">Frequently Asked Questions</p>
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
