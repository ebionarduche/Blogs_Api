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

const findAllUsers = async (_req, res) => {
  const users = await userService.getUsers();
  return res.status(200).json(users);
};

const findUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getByUserId(id);
  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
  const { password, ...userWithoutPassword } = user.dataValues;
  return res.status(200).json(userWithoutPassword);
};

module.exports = {
  createUser,
  findAllUsers,
  findUserById,
};