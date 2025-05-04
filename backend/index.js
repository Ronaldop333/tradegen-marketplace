const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // <- ESSENCIAL usar process.env.PORT

app.get("/", (req, res) => {
  res.send("API do Tradegen rodando com sucesso!");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
