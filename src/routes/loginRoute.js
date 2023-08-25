const route = require('express').Router();
const { loginController } = require('../controller');

route.post('/', loginController.userLogin);

module.exports = route;