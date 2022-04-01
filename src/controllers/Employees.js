const Employees = require('../services/Employees');

const getAllEmployees = async (_req, res) => {
  const users = await Employees.getAllEmployees();

  return res.status(200).json(users);
};

const getEmployeeById = async (req, res) => {
  const { id } = req.params;

  const employee = await Employees.getEmployeeById(id);

  if (employee.message) {
    const { status, message } = employee;

    return res.status(status).json({ message });
  }

  return res.status(200).json({ employee });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};
