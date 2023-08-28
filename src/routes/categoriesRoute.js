const route = require('express').Router();
const { categoriesController } = require('../controller');
const { ValidateToken } = require('../middlewares/ValidateToken');

route.post('/', ValidateToken, categoriesController.createCategory);

route.get('/', ValidateToken, categoriesController.findAllCategories);

module.exports = route;