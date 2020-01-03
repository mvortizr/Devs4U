'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ProjectStage', [
      {
        numero: 0,
        nombre: 'postulacion',
        deadline: "2016-10-10" ,
        proyectoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: 1,
        nombre: 'ejecucion',
        deadline: "2016-10-10" ,
        proyectoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: 2,
        nombre: 'Revision',
        deadline: "2016-10-10" ,
        proyectoId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        numero: 0,
        nombre: 'postulacion',
        deadline: "2016-10-10" ,
        proyectoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: 1,
        nombre: 'ejecucion',
        deadline: "2016-10-10" ,
        proyectoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        numero: 2,
        nombre: 'Revision',
        deadline: "2016-10-10" ,
        proyectoId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

    ])
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
