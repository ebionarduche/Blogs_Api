const route = require('express').Router();
const usersController = require('../controller');
const { 
  validateDisplayNameAndPassword,
  validateEmail } = require('../middlewares/validateUserFields');

route.post('/', validateDisplayNameAndPassword, validateEmail, usersController.createUser);

module.exports = route;