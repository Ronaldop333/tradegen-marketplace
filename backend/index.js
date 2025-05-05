app.get('/debug', async (req, res) => {
    try {
      await fetch('https://tradegen-marketplace-production.up.railway.app/api/status');
      const data = await response.json();
      res.json({ internal: data });
    } catch (err) {
      res.status(500).json({ error: 'Failed to call self', details: err.message });
    }
  });
  