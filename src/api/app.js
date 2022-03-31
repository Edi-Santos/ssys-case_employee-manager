const express = require('express');

const Login = require('../controllers/Login');

const app = express();
app.use(express.json());

// Rotas
app.post('/login', Login.login);

module.exports = app;
