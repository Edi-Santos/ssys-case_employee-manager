const connection = require('./connection');

const COLLECTION = 'admin';

const findUserByEmail = async (email) => {
  const db = await connection();
  const user = await db.collection(COLLECTION).findOne({ email });

  return user;
};

module.exports = {
  findUserByEmail,
};
