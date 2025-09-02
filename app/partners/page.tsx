export const metadata = { title: 'Partners — Merchants' }

export default function PartnersPage() {
  return (
    <div className="section">
      <div className="container-xl space-y-8">
        <div className="text-center space-y-3">
          <p className="badge">Partner Portal</p>
          <h1 className="h1">Start your Anexxa POS integration.</h1>
          <p className="p max-w-2xl mx-auto">Tell us about your business. We’ll set up a sandbox and share SDKs, sample apps, and webhooks.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="card p-8">
            <p className="h3">Company details</p>
            <form className="mt-4 grid gap-3" action="/api/partner-lead" method="post">
              <input required name="company" placeholder="Company name" className="card p-3" />
              <input required name="email" type="email" placeholder="Work email" className="card p-3" />
              <input name="website" placeholder="Website (optional)" className="card p-3" />
              <select name="interest" className="card p-3">
                <option value="pos">Anexxa POS</option>
              </select>
              <textarea name="notes" placeholder="Volumes, countries, acquirer (optional)" className="card p-3" />
              <button className="btn btn-primary w-full">Request sandbox</button>
            </form>
            <p className="small mt-3">Your data is kept confidential.</p>
          </div>

          <div className="card p-8">
            <p className="h3">Why partners choose Anexxa</p>
            <ul className="mt-3 space-y-2 p">
              <li>• Hardware-light Tap to Pay rollout</li>
              <li>• Real-time reporting and payouts</li>
              <li>• Simple SDKs, fast go‑live</li>
              <li>• Works with popular Android terminals</li>
              <li>• Secure, PCI-compliant processing via Stripe</li>
            </ul>
            <div className="mt-6">
              <div className="badge">SLA</div> <span className="small">99.9% uptime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
