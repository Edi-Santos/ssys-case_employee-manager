const Login = require('../models/Login');

const findUserByEmail = async (email) => Login.findUserByEmail(email);

module.exports = {
  findUserByEmail,
};
