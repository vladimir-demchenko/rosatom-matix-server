'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class IS extends Model {
    static associate(models) {
      // define association here
      IS.hasMany(models.Resource, { foreignKey: 'idIS' });
    }
  }
  IS.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {type: DataTypes.STRING, allowNull: false}
  }, {
    sequelize,
    modelName: 'IS',
  });

  

  return IS;
};