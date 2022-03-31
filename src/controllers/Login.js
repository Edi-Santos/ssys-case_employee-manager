const jwt = require('jsonwebtoken');
const Login = require('../services/Login');
const { secret } = require('../auth/loginAtuh');

const jwtConfig = { expiresIn: '1h', algorithm: 'HS256' };

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await Login.findUserByEmail(email, password);

  if (user.message) {
    const { status, message } = user;

    return res.status(status).json({ message });
  }

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
