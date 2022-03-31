const errorEmptyFields = {
  message: 'Os campos devem ser preenchidos.',
  status: 401,
};

const errorEmailFormat = {
  message: 'O email deve ter um formato válido.',
  status: 400,
};

const errorUserNotExists = {
  message: 'O usuário não existe.',
  status: 404,
};

module.exports = {
  errorEmptyFields,
  errorEmailFormat,
  errorUserNotExists,
};
