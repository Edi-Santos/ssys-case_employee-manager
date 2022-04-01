const Employees = require('../models/Employees');

const getAllEmployees = async () => Employees.getAllEmployees();

const getEmployeeById = async (id) => Employees.getEmployeeById(id);

module.exports = {
  getAllEmployees,
  getEmployeeById,
};
