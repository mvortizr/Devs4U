'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Contractor', [
      {
        usuarioId:3,
        createdAt: new Date(),
        updatedAt: new Date()},
      {
        usuarioId:4,
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
