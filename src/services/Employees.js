const Employees = require('../models/Employees');
const employeeValidation = require('../validations/emplyeesValidation');

const getAllEmployees = async () => Employees.getAllEmployees();

const getEmployeeById = async (id) => {
  const validation = await employeeValidation.employeeIdValidation(id);

  if (validation !== true) return validation;

  const employee = await Employees.getEmployeeById(id);

  return employee;
};

const createEmployee = async (employeeDatas) => {
  const validation = employeeValidation.fieldsValidation(employeeDatas);

  if (validation !== true) return validation;

  const newEmployee = await Employees.createEmployee(employeeDatas);

  return newEmployee;
};

const updateEmployee = async (id, employeeDatas) => {
  const validationId = await employeeValidation.employeeIdValidation(id);
  const validationFields = employeeValidation.fieldsValidation(employeeDatas);

  if (validationId !== true) return validationId;
  if (validationFields !== true) return validationFields;
  
  const updatingEmployee = await Employees.updateEmployee(id, employeeDatas);

  return updatingEmployee;
};

const deleteEmployee = async (id) => Employees.deleteEmployee(id);

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
