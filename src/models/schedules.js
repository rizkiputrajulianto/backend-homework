'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedules extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedules.belongsTo(models.Classes, {foreignKey:"classesId", as: "classes"});
      Schedules.belongsToMany(models.JoinClass, {through: "Presence", foreignKey:"schedulesId", as:"schedules"});
      Schedules.hasMany(models.Materials, {foreignKey:"scheduleId", as:"Materials"});
    }
  };
  Schedules.init({
    id: {type: DataTypes.STRING(36), primaryKey:true},
    classesId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    code:{type: DataTypes.STRING(6), unique:true},
    start: DataTypes.DATE,
    end: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Schedules',
  });
  return Schedules;
};