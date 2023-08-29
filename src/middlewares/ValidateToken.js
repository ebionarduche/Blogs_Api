const { getPayload } = require('../auth/authfunctions');

const ValidateToken = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });
    const [, token] = authorization.split(' ');
    const payload = getPayload(token);
    req.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { ValidateToken };