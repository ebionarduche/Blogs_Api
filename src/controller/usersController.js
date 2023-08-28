const { createToken } = require('../auth/authfunctions');
const { userService } = require('../service');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  console.log(user);

  const { password: _password, ...userWithoutPassword } = user.dataValues;
  const payload = { data: userWithoutPassword };
  const token = createToken(payload);

  return res.status(201).json({ token });
};

module.exports = {
  createUser,
};