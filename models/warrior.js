'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Warrior extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Warrior.belongsTo(models.Spaceship, { foreignKey: 'spaceshipId'})
      Warrior.hasMany(models.Weapon, { foreignKey: 'warriorId'})
    }
  };
  Warrior.init({
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    spaceshipId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Warrior',
  });
  return Warrior;
};