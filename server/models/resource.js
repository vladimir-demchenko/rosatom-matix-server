'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resource extends Model {
    static associate(models) {
      // define association here
      Resource.hasMany(models.Role, { foreignKey: 'idResource' });
    }
  }
  Resource.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    idIS: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resource',
  });


  return Resource;
};