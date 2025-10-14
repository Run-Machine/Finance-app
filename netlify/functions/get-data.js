// Netlify Function: Get persisted app data from Netlify Blobs
// Public GET endpoint returning JSON

import { getStore } from '@netlify/blobs';

export default async (req, context) => {
  try {
    const store = getStore('app-data');
    const data = await store.get('data.json', { type: 'json' });
    return new Response(JSON.stringify({ ok: true, data: data || null }), {
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ ok: false, error: 'READ_FAILED' }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
};
