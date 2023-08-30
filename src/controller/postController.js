const postService = require('../service/postService');

const createPost = async (req, res) => {
  const { payload, body } = req;
  
  const postData = { userId: payload.id, ...body };
  
  const create = await postService.createPost(postData, body.categoryIds);

  const post = await postService.getByPostById(create.id);
  
  return res.status(201).json(post);  
};

const getAllPosts = async (_req, res) => {
  const postData = await postService.getAllPostsCategorysAndUsers();
  return res.status(200).json(postData);
};

const getPostById = async (req, res) => {
  const { id } = req.params;
  const postData = await postService.getPostsCategorysAndUsersById(id);
  if (!postData) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(postData);
};

module.exports = {
  createPost,
  getAllPosts,
  getPostById,
};