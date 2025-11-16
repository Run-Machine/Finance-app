// Removed Netlify blob backend: the project now uses localStorage for persistence
// This function was disabled per user request. It returns 404 to indicate it's inactive.
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

  return new Response(JSON.stringify({ ok: false, error: 'DISABLED', message: 'Netlify functions removed' }), { headers, status: 404 });
};
