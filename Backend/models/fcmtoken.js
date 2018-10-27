'use strict';
module.exports = (sequelize, DataTypes) => {
  const FCMToken = sequelize.define('FCMToken', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  FCMToken.associate = function(models) {
    FCMToken.belongsTo(models.User, {
      foreignKey: 'userId',
      onDelete: 'CASCADE',
    });
  };
  return FCMToken;
};
