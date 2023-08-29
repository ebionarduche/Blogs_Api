const postService = require('../service/postService');

const createPost = async (req, res) => {
  const { payload, body } = req;
  
  const postData = { userId: payload.id, ...body };
  
  const create = await postService.createPost(postData, body.categoryIds);

  const post = await postService.getByPostById(create.id);
  
  return res.status(201).json(post);  
};

module.exports = {
  createPost,
};