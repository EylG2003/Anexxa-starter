import { NextResponse } from 'next/server'

export async function POST() {
  return NextResponse.json(
    { ok: false, error: 'gone', message: 'BNPL and gift-card checkout is disabled. Please use /pos.' },
    { status: 410 }
  )
}

