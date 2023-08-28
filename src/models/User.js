/**
 * 
 * @param {import('sequelize').Sequelize} sequelize 
 * @param {import('sequelize').DataTypes} DataTypes 
 * 
 */

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      allowNull: false,
      autoIncrement: true, 
      primaryKey: true, 
      type: DataTypes.INTEGER 
    },
    displayName: DataTypes.STRING,

    email: {
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    image: {
      allowNull: false,
      type: DataTypes.STRING
    }
  },
  {
    timestamps: false, // remove a obrigatoriedade de utilizar os campos `createdAt` e `updatedAt`
    tableName: 'users',
    underscored: true,
  });

  return User; // Corrigido de Employee para User
};
