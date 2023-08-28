const route = require('express').Router();
const { categoriesController } = require('../controller');
const { ValidateToken } = require('../middlewares/ValidateToken');

route.post('/', ValidateToken, categoriesController.createCategory);

module.exports = route;