app.get('/debug', async (req, res) => {
    try {
      const response = await fetch('http://127.0.0.1:' + PORT + '/api/status');
      const data = await response.json();
      res.json({ internal: data });
    } catch (err) {
      res.status(500).json({ error: 'Failed to call self', details: err.message });
    }
  });
  