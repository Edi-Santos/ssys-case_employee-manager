const Employees = require('../models/Employees');

const getAllEmployees = async () => Employees.getAllEmployees();

module.exports = {
  getAllEmployees,
};
