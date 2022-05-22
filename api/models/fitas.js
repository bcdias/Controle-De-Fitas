'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fitas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Fitas.init({
    material: DataTypes.STRING,
    caracteristica: DataTypes.STRING,
    numero: DataTypes.INTEGER,
    metragem: DataTypes.INTEGER,
    custo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fitas',
  });
  return Fitas;
};