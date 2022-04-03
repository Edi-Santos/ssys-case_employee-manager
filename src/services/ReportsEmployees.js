const ReportsEmployees = require('../models/ReportsEmployees');

const salaryReport = async () => ReportsEmployees.salaryReport();

module.exports = {
  salaryReport,
};
