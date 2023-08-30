const { User } = require('../models');

const createUser = (user) => User.create(user);

const getUsers = () => User.findAll({ attributes: { exclude: ['password'] } });

const getByUserLogin = (email) => User.findOne({ where: { email } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByUserLogin,
  getByUserId,
};