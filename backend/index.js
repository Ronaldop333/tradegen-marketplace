const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

const targetHost =
  process.env.NODE_ENV === 'production'
    ? 'http://127.0.0.1:' + PORT
    : 'http://localhost:' + PORT;

app.get('/debug', async (req, res) => {
  try {
    const response = await fetch(`${targetHost}/api/status`);
    const data = await response.json();
    res.json({ internal: data });
  } catch (err) {
    res.status(500).json({ error: 'Failed to call self', details: err.message });
  }
});
