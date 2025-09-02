import Link from "next/link";

export default function Success() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 text-center">
      <h1 className="text-3xl font-bold mb-4">Payment Successful</h1>
      <p className="text-gray-600 mb-8">
        Thanks! Your transaction was completed. You can return to the POS page to continue.
      </p>
      <Link href="/pos" className="btn btn-primary">
        Back to POS
      </Link>
    </main>
  );
}

