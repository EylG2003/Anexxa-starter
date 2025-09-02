import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const contentType = req.headers.get('content-type') || '';
  let payload: Record<string, any> = {};
  if (contentType.includes('application/json')) {
    payload = await req.json().catch(() => ({}));
  } else {
    const form = await req.formData();
    payload = Object.fromEntries(form.entries());
  }

  // TODO: send to CRM (HubSpot/Notion/Zapier) & email to sales.
  console.log('[partner-lead]', payload);

  const url = new URL('/pos', req.url);
  url.searchParams.set('ok', '1');
  return NextResponse.redirect(url, 303);
}

