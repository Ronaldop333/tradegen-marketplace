const express = require("express");
const app = express();

// Middleware básico para teste (opcional)
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("🚀 API do TradeGen Marketplace online!");
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
