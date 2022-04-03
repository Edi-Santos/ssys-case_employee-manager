const connection = require('./connection');

const COLLECTION = 'employees';

const salaryReport = async () => {
  const db = await connection();

  const lowest = await db.collection(COLLECTION).find()
    .sort({ salary: 1 }).limit(1)
    .toArray();

  const highest = await db.collection(COLLECTION).find()
    .sort({ salary: -1 }).limit(1)
    .toArray();

  const average = (parseFloat(lowest[0].salary) + parseFloat(highest[0].salary)) / 2;

  const report = {
    lowest: lowest[0],
    highest: highest[0],
    average: average.toFixed(2),
  };
  
  return report;
};

const ageReport = async () => {
  const db = await connection();

  const younger = await db.collection(COLLECTION).find()
    // eslint-disable-next-line camelcase
    .sort({ birth_date: -1 }).limit(1)
    .toArray();

  const older = await db.collection(COLLECTION).find()
    // eslint-disable-next-line camelcase
    .sort({ birth_date: 1 }).limit(1)
    .toArray();

  const report = {
    younger: younger[0],
    older: older[0],
    // average: average.toFixed(2)
  };

  return report;
};

module.exports = {
  salaryReport,
  ageReport,
};
