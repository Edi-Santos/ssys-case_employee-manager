const Login = require('../models/Login');
const errorMessages = require('./messages/loginMessages');

// Consulta ao banco de dados para validação
// ===
const userExists = async (email) => {
  const user = await Login.findUserByEmail(email);
  
  if (user === null) return errorMessages.errorUserNotExists;

  return true;
};
// ===

// Funções auxiliares para validação
// ===
const validatingEmail = (email) => {
  const emailReg = /\S+@\S+\.\S+/;

  if (!emailReg.test(email)) return errorMessages.errorEmailFormat;

  return true;
};
// ====

const loginValidations = async (email, password) => {
  const emailIsValid = validatingEmail(email);
  
  if (!email && !password) return errorMessages.errorEmptyFields;
  if (!emailIsValid) return emailIsValid;
  
  const verifingIfUserExists = await userExists(email);
  if (verifingIfUserExists !== true) return verifingIfUserExists;

  return true;
};

module.exports = loginValidations;
