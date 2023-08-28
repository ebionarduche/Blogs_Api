const route = require('express').Router();
const { usersController } = require('../controller');
const { ValidateToken } = require('../middlewares/ValidateToken');
const { 
  validateDisplayNameAndPassword,
  validateEmail } = require('../middlewares/validateUserFields');

route.get('/', ValidateToken, usersController.findAllUsers);
route.post('/', validateDisplayNameAndPassword, validateEmail, usersController.createUser);

module.exports = route;
