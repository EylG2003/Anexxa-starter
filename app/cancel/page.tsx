import Link from 'next/link'

export const metadata = { title: 'Payment cancelled — Anexxa' }

export default function CancelPage() {
  return (
    <div className="section">
      <div className="container-sm text-center space-y-6">
        <h1 className="h1">❌ Payment cancelled</h1>
        <p className="p">No charges were made.</p>
        <div>
          <Link href="/pos" className="btn btn-primary">Back to POS</Link>
        </div>
      </div>
    </div>
  )
}
