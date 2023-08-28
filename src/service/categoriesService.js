const { Category } = require('../models');

const createCategories = (category) => Category.create(category);

const getCategories = () => Category.findAll();

const getCategoryByName = (name) => Category.findOne({ where: { name } });

const getByCategoryId = (CategoryId) => Category.findByPk(CategoryId);

module.exports = {
  createCategories,
  getCategories,
  getCategoryByName,
  getByCategoryId,
};

// Funções Auxiliares retiradas da Aula 