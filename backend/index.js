const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '127.0.0.1';

// Middleware CORS dinâmico seguro
app.use(cors({
    origin: function (origin, callback) {
      const whitelist = process.env.ALLOWED_ORIGINS?.split(',') || [];
  
      if (!origin) {
        // Permite chamadas internas ou ferramentas como curl
        return callback(null, true);
      }
  
      if (whitelist.includes(origin)) {
        return callback(null, true);
      }
  
      console.warn(`🔒 CORS bloqueado para origem: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
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


// Mock simples de usuários
const users = [];

// GET /api/users - lista usuários
app.get('/api/users', (req, res) => {
  res.json(users);
});

// POST /api/users - adiciona usuário
app.use(express.json());
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  const user = { id: Date.now(), name, email };
  users.push(user);
  res.status(201).json(user);
});


// Inicializa o servidor
app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
