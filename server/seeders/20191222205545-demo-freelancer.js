'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert('Freelancer', [
    { 
      usuarioId: 1,
      tiempoExperiencia:9,
      tipoFreelancer: 'Web',
      status: 'Disponible',
      habilidades:['vue','node','postgress','java','php'],
      seniority:'Junior',
      createdAt: new Date(),
       updatedAt: new Date()
    },
    {
      usuarioId: 2,
      tiempoExperiencia:9,
      tipoFreelancer: 'Escritoriio',
      status: 'Disponible',
      habilidades:['java','cotlin','sql'],
      seniority:'Senior',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {freezeTableName: true});
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
