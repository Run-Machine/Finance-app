// Netlify Function: Get persisted app data from Netlify Blobs
// Public GET endpoint returning JSON

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  // Set CORS headers for cross-origin requests
  const headers = {
    'Content-Type': 'application/json',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle OPTIONS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers, status: 204 });
  }

  try {
    const store = getStore('app-data');
    const data = await store.get('data.json', { type: 'json' });
    
    return new Response(JSON.stringify({ ok: true, data: data || null }), {
      headers,
      status: 200,
    });
  } catch (err) {
    console.error('Blob read error:', err);
    return new Response(JSON.stringify({ ok: false, error: 'READ_FAILED', message: err.message }), {
      headers,
      status: 500,
    });
  }
};
