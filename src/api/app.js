const express = require('express');

const app = express();
app.use(express.json());

// Rotas
app.post('/login');

module.exports = app;
