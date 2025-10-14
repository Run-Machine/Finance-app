// Netlify Function: Persist app data to Netlify Blobs
// Exposes a POST endpoint that accepts full JSON payload

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'METHOD_NOT_ALLOWED' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 405,
    });
  }
  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || body.data == null) {
      return new Response(JSON.stringify({ ok: false, error: 'INVALID_PAYLOAD' }), {
        headers: { 'Content-Type': 'application/json' },
        status: 400,
      });
    }
    const store = getStore('app-data');
    await store.set('data.json', body.data, { metadata: { updatedAt: Date.now() } });
    return new Response(JSON.stringify({ ok: true }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'WRITE_FAILED' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
};
