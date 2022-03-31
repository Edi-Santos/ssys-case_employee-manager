const Employees = require('../services/Employees');

const getAllEmployees = async (_req, res) => {
  const users = await Employees.getAllEmployees();

  return res.status(200).json(users);
};

module.exports = {
  getAllEmployees,
};
