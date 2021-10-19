'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.belongsToMany(models.Classes, {through:"JoinClass", as:"user", foreignKey:"userId"});
    }
  };
  Users.init({
    id: { type: DataTypes.STRING(36), primaryKey: true},
    fullName: DataTypes.STRING(50),
    placeBirth: DataTypes.STRING(100),
    birthdate: DataTypes.DATEONLY,
    role: DataTypes.ENUM('admin','user'),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING,
    address:DataTypes.STRING,
    province: DataTypes.STRING(100),
    city: DataTypes.STRING(100),
    lastStudy: DataTypes.STRING(20),
    currentJob: DataTypes.STRING(100)
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};