const { createToken } = require('../auth/authfunctions');
const { userService } = require('../service');

const isBodyValid = (email, password) => email && password;

const userLogin = async (req, res) => {
const { email, password } = req.body;
  if (!isBodyValid(email, password)) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

const user = await userService.getByUserLogin(email, password);
  if (!user) {
      return res.status(400).json({ message: 'Invalid fields' });
  }

const { password: _password, ...userWithoutPassword } = user.dataValues;
    
const payload = { userWithoutPassword };

const token = createToken(payload);

res.status(200).json({ token });
};

module.exports = {
  userLogin,
};