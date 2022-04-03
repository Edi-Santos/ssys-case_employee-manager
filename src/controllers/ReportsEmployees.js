const ReportsEmployees = require('../services/ReportsEmployees');

const salaryReport = async (_req, res) => {
  const report = await ReportsEmployees.salaryReport();

  return res.status(200).json(report);
};

module.exports = {
  salaryReport,
};
