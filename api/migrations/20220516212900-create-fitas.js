'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fitas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      material: {
        allowNull: false,
        type: Sequelize.STRING
      },
      caracteristica: {
        allowNull: false,
        type: Sequelize.STRING
      },
      numero: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      metragem: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      custo: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Fitas');
  }
};