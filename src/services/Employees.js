const Employees = require('../models/Employees');
const employeeValidation = require('../validations/emplyeesValidation');

const getAllEmployees = async () => Employees.getAllEmployees();

const getEmployeeById = async (id) => {
  const validation = await employeeValidation.employeeIdValidation(id);

  if (validation !== true) return validation;

  const employee = await Employees.getEmployeeById(id);

  return employee;
};

const createEmployee = async (employeeDatas) => Employees.createEmployee(employeeDatas);

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
};
