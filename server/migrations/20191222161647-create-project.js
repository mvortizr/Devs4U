'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Project', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      etapa: {
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      tipo: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      encargadoId: {
        type: Sequelize.INTEGER
      },
      creadorId: {
        type: Sequelize.INTEGER
      },
      presupuesto: {
        type: Sequelize.STRING
      },
      entregables: {
        type: Sequelize.TEXT
      },
      visiblePortafolio: {
        type: Sequelize.BOOLEAN
      },
      objetivos:{
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      tecnologias:{
        type: Sequelize.ARRAY(Sequelize.TEXT)
      },
      adicionales:{
        type: Sequelize.ARRAY(Sequelize.TEXT)
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
    return queryInterface.dropTable('Project');
  }
};