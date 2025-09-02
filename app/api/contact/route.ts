import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';
  let name = '';
  let email = '';
  if (contentType.includes('application/json')) {
    const json = await req.json().catch(() => ({}));
    name = String(json.name || '');
    email = String(json.email || '');
  } else {
    const form = await req.formData();
    name = String(form.get('name') || '');
    email = String(form.get('email') || '');
  }

  // TODO: integrate SendGrid or Resend.
  console.log('[contact] new waitlist', { name, email });

  const url = new URL('/pos', req.url);
  url.searchParams.set('ok', '1');
  return NextResponse.redirect(url, 303);
}
