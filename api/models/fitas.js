'use strict';
const {
  Model
} = require('sequelize');
const { Sequelize } = require('.');
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
    material: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    caracteristica: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    metragem: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    custo: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Fitas',
    scopes: {
      exclui: {
        attributes: { 
          exclude: ['createdAt', 'updatedAt'] 
        }
      }
    }
  });
  return Fitas;
};