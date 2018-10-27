'use strict';
module.exports = (sequelize, DataTypes) => {
  const Label = sequelize.define('Label', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Label.associate = function(models) {
    Label.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    Label.belongsToMany(models.Recipe, {
      foreignKey: 'labelId',
      otherKey: 'recipeId',
      as: 'recipes',
      through: models.Recipe_Label
    });
  };
  return Label;
};
