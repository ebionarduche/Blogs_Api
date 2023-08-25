const { User } = require('../models');

const createUser = ({ username, password }) => User.create({ username, password });

const getUsers = () => User.findAll();

const getByUserLogin = (email, password) => User.findOne({ where: { email, password } });

const getByUserId = (userId) => User.findByPk(userId);

module.exports = {
  createUser,
  getUsers,
  getByUserLogin,
  getByUserId,
};

// Funções Auxiliares retiradas da Aula 