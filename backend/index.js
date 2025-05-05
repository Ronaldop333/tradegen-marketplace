const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

// Middleware CORS dinâmico
app.use(cors({
  origin: process.env.ALLOWED_ORIGINS?.split(',') || '*',
}));

// Endpoint de status simples
app.get('/api/status', (req, res) => {
  res.json({ status: 'online', timestamp: Date.now() });
});

// Rota de diagnóstico interno
app.get('/debug', async (req, res) => {
  try {
    const response = await fetch(`http://${HOST}:${PORT}/api/status`);
    const data = await response.json();
    res.json({ internal: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to call self', details: err.message });
  }
});

// Inicializa o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
