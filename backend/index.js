const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/debug', async (req, res) => {
  try {
    const response = await fetch('https://tradegen-marketplace-production.up.railway.app/api/status');
    const data = await response.json();
    res.json({ internal: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to call self', details: err.message });
  }
});

// outras rotas...

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
