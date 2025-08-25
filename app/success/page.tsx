import Link from 'next/link'

export const metadata = { title: 'Payment successful — Anexxa' }

export default function SuccessPage() {
  return (
    <div className="section">
      <div className="container-sm text-center space-y-6">
        <h1 className="h1">✅ Payment successful</h1>
        <p className="p">Your gift card code will be sent by email shortly.</p>
        <div>
          <Link href="/gift-cards" className="btn btn-primary">Back to Gift Cards</Link>
        </div>
      </div>
    </div>
  )
}
