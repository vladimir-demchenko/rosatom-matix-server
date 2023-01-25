'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      // define association here
      Role.belongsTo(models.Resource, { foreignKey: "idResource" });
    }
  }

  Role.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    idResource: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role',
  });


  return Role;
};