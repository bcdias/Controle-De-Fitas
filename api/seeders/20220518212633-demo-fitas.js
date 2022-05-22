'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Fitas', [
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 2,
        metragem: 10,
        custo: 265,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 3,
        metragem: 10,
        custo: 425,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 2,
        metragem: 10,
        custo: 265,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 9,
        metragem: 10,
        custo: 691,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 2,
        metragem: 10,
        custo: 265,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        material: 'gorgurao',
        caracteristica: "lisa",
        numero: 3,
        metragem: 10,
        custo: 425,
        createdAt: new Date(),
        updatedAt: new Date(),
      },

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Fitas', null, {});

  }
};
