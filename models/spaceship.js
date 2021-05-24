'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spaceship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Spaceship.hasMany(models.Warrior, { foreignKey: 'spaceshipId'})
    }
  };
  Spaceship.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Spaceship',
  });
  return Spaceship;
};