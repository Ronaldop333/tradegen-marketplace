const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Middlewares (se houver)
app.use(express.json());

// Rotas base
app.get('/', (req, res) => {
  res.send('🚀 TradeGen API Online');
});

app.get('/status', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// Suas rotas reais
const routes = require('./routes');
app.use('/api', routes);

// Inicializa o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
