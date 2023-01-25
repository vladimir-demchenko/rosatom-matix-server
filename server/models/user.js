'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Position, { foreignKey: 'position' });
      User.belongsTo(models.Subdivision, { foreignKey: 'subdivision' });
      User.belongsTo(models.Department, { foreignKey: 'department' });
    }
  }
  User.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    personalId: DataTypes.INTEGER,
    surname: DataTypes.STRING,
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    position: DataTypes.INTEGER,
    subdivision: DataTypes.INTEGER,
    department: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    comment: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};