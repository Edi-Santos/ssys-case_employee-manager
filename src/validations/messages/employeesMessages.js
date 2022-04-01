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

module.exports = {
  errorInvalidId,
  errorEmployeeNotExists,
};
