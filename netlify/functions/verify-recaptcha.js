exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ success: false, error: 'method-not-allowed' }) };
  }
  try {
    const { token } = JSON.parse(event.body || '{}');
    if (!token) return { statusCode: 400, body: JSON.stringify({ success: false, error: 'missing-token' }) };
    const params = new URLSearchParams();
    params.append('secret', process.env.RECAPTCHA_SECRET);
    params.append('response', token);
    const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    });
    const data = await res.json();
    if (!data.success) {
      return { statusCode: 403, body: JSON.stringify({ success: false, errorCodes: data['error-codes'] || [] }) };
    }
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ success: false, error: 'server-error' }) };
  }
};
