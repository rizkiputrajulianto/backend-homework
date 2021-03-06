'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Classes.belongsToMany(models.Users, {through: "JoinClass", as:"class", foreignKey:"classesId"});
      Classes.hasMany(models.Schedules, {foreignKey:"classesId", as:"schedules"});
    }
  };
  Classes.init({
    name: DataTypes.STRING,
    code:{
      type: DataTypes.STRING(6),
      unique: true
    },
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    startDate: DataTypes.DATEONLY,
    endDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Classes',
  });
  return Classes;
};