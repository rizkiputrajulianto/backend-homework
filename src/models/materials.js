'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Materials extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Materials.belongsTo(models.Schedules, {foreignKey:"scheduleId", as:"schedule"});
    }
  };
  Materials.init({
    id: {type:DataTypes.STRING(36), primaryKey:true},
    name: DataTypes.STRING,
    file: DataTypes.STRING,
    type: DataTypes.ENUM('recording', 'material'),
    scheduleId: DataTypes.STRING(36)
  }, {
    sequelize,
    modelName: 'Materials',
  });
  return Materials;
};