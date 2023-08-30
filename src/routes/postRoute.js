const route = require('express').Router();
const postController = require('../controller/postController');
const { ValidatePostFields } = require('../middlewares/ValidatePostFields');
const { ValidateToken } = require('../middlewares/ValidateToken');

route.post('/', ValidateToken, ValidatePostFields, postController.createPost);
route.get('/', ValidateToken, postController.getAllPosts);

module.exports = route;
