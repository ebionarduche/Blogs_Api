const { BlogPost, PostCategory } = require('../models');

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

const getPostByTitle = (title) => BlogPost.findOne({ where: { title } });

const getByPostById = (postId) => BlogPost.findByPk(postId);

module.exports = {
  createPost,
  getAllPosts,
  getPostByTitle,
  getByPostById,
};

// Funções Auxiliares retiradas da Aula 