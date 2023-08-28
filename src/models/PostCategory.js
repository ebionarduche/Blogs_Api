/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */
module.exports = (sequelize, DataTypes) => {
  const Postcategory = sequelize.define('PostCategory', {
    postId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      foreignKey: true
    },
    categoryId: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      foreignKey: true
    }
  },
  {
    timestamps: false,
    underscored:true,
    tableName: 'posts_categories'
  });
  
  Postcategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: Postcategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: Postcategory,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return Postcategory
}