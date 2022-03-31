const express = require('express');

const Login = require('../controllers/Login');
const Employees = require('../controllers/Employees');
const auth = require('../auth/loginAtuh');

const app = express();
app.use(express.json());

// Rotas
app.post('/login', Login.login);
app.get('/employees', auth.authorization, Employees.getAllEmployees);

module.exports = app;
