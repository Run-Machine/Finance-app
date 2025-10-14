// Netlify Function: Persist app data to Netlify Blobs
// Exposes a POST endpoint that accepts full JSON payload

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  // Set CORS headers
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers, status: 204 });
  }

  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ ok: false, error: 'METHOD_NOT_ALLOWED' }), {
      headers,
      status: 405,
    });
  }

  try {
    const body = await req.json();
    if (!body || typeof body !== 'object' || body.data == null) {
      return new Response(JSON.stringify({ ok: false, error: 'INVALID_PAYLOAD' }), {
        headers,
        status: 400,
      });
    }

    // Validate data structure has required fields
    if (!body.data.events || !Array.isArray(body.data.events)) {
      return new Response(JSON.stringify({ ok: false, error: 'INVALID_DATA_STRUCTURE' }), {
        headers,
        status: 400,
      });
    }

    const store = getStore('app-data');
    await store.set('data.json', JSON.stringify(body.data), { 
      metadata: { 
        updatedAt: Date.now(),
        version: body.data.settings?.version || '1.0.0'
      } 
    });

    return new Response(JSON.stringify({ ok: true, synced: true }), {
      headers,
      status: 200,
    });
  } catch (err) {
    console.error('Blob write error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'WRITE_FAILED', message: err.message }), {
      headers,
      status: 500,
    });
  }
};
