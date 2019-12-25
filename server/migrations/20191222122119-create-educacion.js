'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Educacion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      freelancerId: {
        type: Sequelize.INTEGER
      },
      tituloObtenido: {
        type: Sequelize.STRING
      },
      institucion: {
        type: Sequelize.STRING
      },
      anoInicio: {
        type: Sequelize.INTEGER
      },
      anoFin: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Educacion');
  }
};