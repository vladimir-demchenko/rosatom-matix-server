'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Access extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Access.belongsTo(models.Users, {
        foreignKey: 'name'
      });
      Access.belongsTo(models.Users, {
        foreignKey: 'personalId'
      });
      Access.belongsTo(models.IS, { foreignKey: 'is' });
      Access.belongsTo(models.Resource, { foreignKey: 'resource' });
      Access.belongsTo(models.Role, { foreignKey: 'role' });
    }
  }
  Access.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dateRequest: DataTypes.DATE,
    document: DataTypes.STRING,
    name: DataTypes.INTEGER,
    personalId: DataTypes.INTEGER,
    is: DataTypes.INTEGER,
    resource: DataTypes.INTEGER,
    role: DataTypes.INTEGER,
    typeOfAccess: DataTypes.STRING,
    comment: DataTypes.STRING,
    disableAccess: DataTypes.STRING,
    dateDisableAccess: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Access',
  });
  return Access;
};