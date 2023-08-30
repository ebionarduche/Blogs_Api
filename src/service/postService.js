const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async (postData, categoryIds) => { 
  const post = await BlogPost.create(postData);
  console.log(BlogPost);
  console.log(PostCategory);

  await Promise.all(
    categoryIds.map(async (categoryId) => {
      await PostCategory.create({ postId: post.id, categoryId });
    }),
  );
  return post;
};

const getAllPosts = () => BlogPost.findAll();

const getAllPostsCategorysAndUsers = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },    
    ],
  });
  return posts;
};

const getPostsCategorysAndUsersById = async (postId) => {
  const post = await BlogPost.findOne({
    where: { id: postId },
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },    
    ],
  });
  return post;
};

const getPostByTitle = (title) => BlogPost.findOne({ where: { title } });

const getByPostById = (postId) => BlogPost.findByPk(postId);

module.exports = {
  createPost,
  getAllPosts,
  getPostByTitle,
  getByPostById,
  getAllPostsCategorysAndUsers,
  getPostsCategorysAndUsersById,
};

// Funções Auxiliares retiradas da Aula 