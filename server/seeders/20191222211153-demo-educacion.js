'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Educacion', [
      {
        freelancerId: 1,
        tituloObtenido: 'Ing Informatica',
        institucion: 'UCAB',
        anoInicio: '2017',
        anoFin: '2022',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        freelancerId: 2,
        tituloObtenido: 'Ing Informatica',
        institucion: 'USB',
        anoInicio: '2016',
        anoFin: '2021',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {freezeTableName: true})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
