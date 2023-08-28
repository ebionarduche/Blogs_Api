const { userService } = require('../service');

const validateDisplayNameAndPassword = (req, res, next) => {
  const { displayName, password } = req.body; 

  if (displayName.length < 8) {
    return res.status(400)
    .json({ message: '"displayName" length must be at least 8 characters long',
  });
}
  if (password.length < 6) {
    return res.status(400)
    .json({ message: '"password" length must be at least 6 characters long' });
  }
  next();
};
const validateEmail = async (req, res, next) => {
  const { email } = req.body;
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    return res.status(400).json({ message: '"email" must be a valid email' });
  }

  const user = await userService.getByUserLogin(email);
  if (user) {
    return res.status(409).json({ message: 'User already registered' });
  }

  next();
};
module.exports = {
  validateDisplayNameAndPassword,
  validateEmail,
};