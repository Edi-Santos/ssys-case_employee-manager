const connection = require('./connection');

const COLLECTION = 'employees';

const getAllEmployees = async () => {
  const db = await connection();
  const users = await db.collection(COLLECTION).find().toArray();

  return users;
};

module.exports = {
  getAllEmployees,
};
