'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Experiencia', [
      {
        freelancerId: 1,
        nombreEmpresa: 'Piramides seguro',
        cargo: 'ejecutivo',
        anoInicio: '1999',
        anoFin: '1999',
        createdAt: new Date(),
        updatedAt: new Date()
    },

    {
      freelancerId: 2,
        nombreEmpresa: 'Mercantil',
        cargo: 'Ingeniero',
        anoInicio: '2003',
        anoFin: '2018',
        createdAt: new Date(),
        updatedAt: new Date()
    }
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
