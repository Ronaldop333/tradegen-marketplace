const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1'; // novo

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', timestamp: Date.now() });
});

app.get('/debug', async (req, res) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/api/status`);
    const data = await response.json();
    res.json({ internal: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to call self', details: err.message });
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
