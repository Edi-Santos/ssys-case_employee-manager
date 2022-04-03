const ReportsEmployees = require('../models/ReportsEmployees');

const salaryReport = async () => ReportsEmployees.salaryReport();

const ageReport = async () => ReportsEmployees.ageReport();

module.exports = {
  salaryReport,
  ageReport,
};
