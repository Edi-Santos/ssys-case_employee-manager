const { ObjectId } = require('mongodb');
const connection = require('./connection');

const COLLECTION = 'employees';

const getAllEmployees = async () => {
  const db = await connection();
  const employees = await db.collection(COLLECTION).find().toArray();

  return employees;
};

const getEmployeeById = async (id) => {
  const db = await connection();
  const user = await db.collection(COLLECTION).findOne({ _id: new ObjectId(id) });

  return user;
};

const createEmployee = async (employeeDatas) => {
  const db = await connection();
  const newEmployee = await db.collection(COLLECTION).insertOne(employeeDatas);

  return {
    _id: newEmployee.insertedId,
    ...employeeDatas,
  };
};

const updateEmployee = async (id, employeeDatas) => {
  const { name, email, department, salary, birth_date } = employeeDatas;

  const db = await connection();
  await db.collection(COLLECTION).updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        email,
        department,
        salary,
        // eslint-disable-next-line camelcase
        birth_date,
      },
    },
  );

  return {
    _id: id,
    ...employeeDatas,
  };
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
};
