const { categoriesService } = require('../service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required' });

    const category = await categoriesService.createCategories(req.body);
    res.status(201).json(category);
};

const findAllCategories = async (_req, res) => {
  const categories = await categoriesService.getCategories();
  return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  findAllCategories,
};