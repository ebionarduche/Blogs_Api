const { categoriesService } = require('../service/index');

const ValidatePostFields = async (req, res, next) => {
  const { categoryIds, title, content } = req.body;

  if (!categoryIds || !title || !content) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }

  const categories = await Promise
    .all(categoryIds.map((id) => categoriesService.getByCategoryId(id)));
  const categoriesNotFound = categories.filter((category) => !category);
    if (categoriesNotFound.length > 0) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

  next();
};
module.exports = {
  ValidatePostFields,
};