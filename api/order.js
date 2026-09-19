
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { service, link, quantity } = req.body;
  const apiKey = "474d7f1f7544c2347f59b63d65631a66"; // Updated JAP API Key

  try {
    const response = await fetch('https://justanotherpanel.com/api/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        key: apiKey,
        action: 'add',
        service: service,
        link: link,
        quantity: quantity
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Server connection failed', details: error.message });
  }
}
