'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Weapon.belongsTo(models.Warrior, { foreignKey: 'warriorId'})
    }
  };
  Weapon.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    warriorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};