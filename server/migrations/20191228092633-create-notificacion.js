'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Notificacions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      leida: {
        type: Sequelize.BOOLEAN
      },
      titulo: {
        type: Sequelize.STRING
      },
      vinculo: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      descripcion: {
        type: Sequelize.TEXT
      },
      usuarioId: {
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
    return queryInterface.dropTable('Notificacions');
  }
};