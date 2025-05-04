const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Railway define a PORT dinamicamente

app.get('/', (req, res) => {
  res.send('API funcionando na Railway!');
});

app.get("/api/status", (req, res) => {
    res.json({ status: "online", timestamp: Date.now() });
  });
  
  const PORT = process.env.PORT;

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
  