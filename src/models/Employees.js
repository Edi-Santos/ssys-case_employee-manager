const { ObjectId } = require('mongodb');
const connection = require('./connection');

const COLLECTION = 'employees';

const getAllEmployees = async () => {
  const db = await connection();
  const users = await db.collection(COLLECTION).find().toArray();

  return users;
};

const getEmployeeById = async (id) => {
  const db = await connection();
  const user = await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });

  return user;
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
};
