const Employees = require('../services/Employees');

const getAllEmployees = async (_req, res) => {
  const employees = await Employees.getAllEmployees();

  return res.status(200).json(employees);
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

const createEmployee = async (req, res) => {
  const employeeDatas = req.body;

  const newEmployee = await Employees.createEmployee(employeeDatas);

  if (newEmployee.message) {
    const { status, message } = newEmployee;

    return res.status(status).json({ message });
  }

  return res.status(201).json({ newEmployee });
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const employeeDatas = req.body;

  const updatedEmployee = await Employees.updateEmployee(id, employeeDatas);

  if (updatedEmployee.message) {
    const { status, message } = updatedEmployee;

    return res.status(status).json({ message });
  }

  return res.status(200).json({ updatedEmployee });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
};
