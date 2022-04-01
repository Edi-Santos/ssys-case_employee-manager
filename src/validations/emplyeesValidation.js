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

// Funções auxiliares para validação
// ===
const emptyProperty = (employeeDatas) => Object.keys(employeeDatas)
  .some((property) => employeeDatas[property] === '');

const propertyType = (employeeDatas) => Object.keys(employeeDatas)
  .some((property) => typeof (employeeDatas[property]) !== 'string');
// ===

const employeeIdValidation = async (id) => {
  if (!ObjectId.isValid(id)) return errorMessages.errorInvalidId;
  
  const employee = await employeeExists(id);
  if (employee !== true) return employee;

  return true;
};

const createEmployeeValidatin = (employeeDatas) => {
  // const { name, email, department, salary, birth_date } = employeeDatas;

  const emptyPropertyValidation = emptyProperty(employeeDatas);
  const propertiesTypeValidation = propertyType(employeeDatas);

  if (emptyPropertyValidation) return errorMessages.errorEmptyFields;
  if (propertiesTypeValidation) return errorMessages.errorPropertyType;

  return true;
};

module.exports = {
  employeeIdValidation,
  createEmployeeValidatin,
};
