const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000; // Railway define a PORT dinamicamente

app.get('/', (req, res) => {
  res.send('API funcionando na Railway!');
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
