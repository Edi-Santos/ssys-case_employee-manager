// Mensagens para endpoint GET /employees/:id
// ===
const errorInvalidId = {
  message: 'Id inválido.',
  status: 404,
};

const errorEmployeeNotExists = {
  message: 'Funcionário não existe.',
  status: 404,
};
// ===

// Mensagens para endpoint POST /employees
// ===
const errorEmptyFields = {
  message: 'Todos os campos devem ser preenchidos.',
  status: 401,
};

const errorPropertyType = {
  message: 'Todos os campos devem ser do tipo string',
  status: 400,
};
// ===

module.exports = {
  errorInvalidId,
  errorEmployeeNotExists,
  errorEmptyFields,
  errorPropertyType,
};
