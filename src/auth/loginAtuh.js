const jwt = require('jsonwebtoken');
const Login = require('../models/Login');

const secret = '!#securityKey#!';

const authorization = async (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: 'Falta token de autorização' });
    
    const decoded = jwt.verify(token, secret);

    const userAuth = await Login.findUserByEmail(decoded.data.email);

    if (!userAuth) return res.status(401).json({ message: 'Token malformado' });

    req.user = userAuth;
    next();
  } catch (error) {
   return res.status(401).json({ message: error.message });
  }
};

module.exports = {
  secret,
  authorization,
};
