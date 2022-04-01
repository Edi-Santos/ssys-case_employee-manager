const { ObjectId } = require('mongodb');
const Employees = require('../models/Employees');
const errorMessages = require('./messages/employeesMessages');

// Consulta ao banco de dados para validação
// ===
const employeeExists = async (id) => {
  const employee = await Employees.getEmployeeById(id);
  
  if (employee === null) return errorMessages.errorEmployeeNotExists;

  return true;
};
// ===

const employeeIdValidation = async (id) => {
  if (!ObjectId.isValid(id)) return errorMessages.errorInvalidId;
  
  const employee = await employeeExists(id);
  if (employee !== true) return employee;

  return true;
};

module.exports = {
  employeeIdValidation,
};
