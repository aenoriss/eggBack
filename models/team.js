'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Team.init({
    name: DataTypes.STRING,
    points: {
      type: DataTypes.INTEGER,
      default: 0,
    }
  }, {
    sequelize,
    tableName: "team",
    modelName: 'Team',
  });
  return Team;
};