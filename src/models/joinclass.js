'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      JoinClass.belongsToMany(models.Schedules, {through: "Presence", as:"joinClass", foreignKey:"joinClassId"})
    }
  };
  JoinClass.init({
    id:{type: DataTypes.STRING(36), primaryKey:true },
    classesId: DataTypes.INTEGER,
    userId: DataTypes.STRING(36),
    role: DataTypes.ENUM('student','tutor','facilitator')
  }, {
    sequelize,
    modelName: 'JoinClass',
  });
  return JoinClass;
};