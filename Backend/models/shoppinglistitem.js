'use strict';
module.exports = (sequelize, DataTypes) => {
  const ShoppingListItem = sequelize.define('ShoppingListItem', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    title: DataTypes.STRING,
    completed: DataTypes.BOOLEAN
  }, {});
  ShoppingListItem.associate = function(models) {
    ShoppingListItem.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });

    ShoppingListItem.belongsTo(models.ShoppingList, {
      foreignKey: 'shoppingListId',
      onDelete: 'CASCADE',
    });

    ShoppingListItem.belongsTo(models.MealPlanItem, {
      foreignKey: 'mealPlanItemId',
      onDelete: 'CASCADE',
    });

    ShoppingListItem.belongsTo(models.Recipe, {
      foreignKey: 'recipeId',
      onDelete: 'CASCADE',
    });
  };
  return ShoppingListItem;
};