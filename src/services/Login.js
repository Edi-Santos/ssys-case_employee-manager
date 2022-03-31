const Login = require('../models/Login');
const loginValidations = require('../validations/loginValidations');

const findUserByEmail = async (email, password) => {
  const validation = await loginValidations(email, password);

  if (validation !== true) return validation;

  const user = await Login.findUserByEmail(email);

  return user;
};

module.exports = {
  findUserByEmail,
};
