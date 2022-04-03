const express = require('express');

const Login = require('../controllers/Login');
const Employees = require('../controllers/Employees');
const ReportsEmployees = require('../controllers/ReportsEmployees');
const auth = require('../auth/loginAtuh');

const app = express();
app.use(express.json());

// Rotas
app.post('/login', Login.login);
app.get('/employees', auth.authorization, Employees.getAllEmployees);
app.get('/employees/salary', auth.authorization, ReportsEmployees.salaryReport);
app.get('/employees/:id', auth.authorization, Employees.getEmployeeById);
app.post('/employees', auth.authorization, Employees.createEmployee);
app.put('/employees/:id', auth.authorization, Employees.updateEmployee);
app.delete('/employees/:id', auth.authorization, Employees.deleteEmployee);

module.exports = app;
