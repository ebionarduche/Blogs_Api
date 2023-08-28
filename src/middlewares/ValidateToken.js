const { getPayload } = require('../auth/authfunctions');

const ValidateToken = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const token = authorization.split(' ')[1];
    const payload = getPayload(token);
    req.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  ValidateToken,
};