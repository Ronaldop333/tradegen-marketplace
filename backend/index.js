const express = require('express');
const app = express();

const PORT = process.env.PORT || 3001; // Railway usa 3001

app.get('/', (req, res) => {
  res.send('API funcionando na Railway!');
});

app.get('/api/status', (req, res) => {
  res.json({ status: 'online', timestamp: Date.now() });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
