'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Projects', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      contractor: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      entregables: {
        type: Sequelize.TEXT
      },
      tecnologies: {
        type: Sequelize.ARRAY(Sequelize.TEXT) 
      },
      photo: {
        type: Sequelize.STRING
      },
      postulados: {
        type: Sequelize.JSON
      },
      etapa: {
        type: Sequelize.STRING
      },
      encargado: {
        type: Sequelize.INTEGER
      },
      additionals: {
        type: Sequelize.TEXT
      },
      disponibilidad: {
        type: Sequelize.STRING
      },
      iteraciones: {
        type: Sequelize.JSON
      },
      projectType: {
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
    return queryInterface.dropTable('Projects');
  }
};