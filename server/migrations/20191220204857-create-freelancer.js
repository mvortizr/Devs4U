'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Freelancer', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usuarioId: {
        type: Sequelize.INTEGER
      },
      tiempoExperiencia: {
        type: Sequelize.STRING
      },
      tipoFreelancer: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      habilidades:{
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      seniority:{
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Freelancer');
  }
};