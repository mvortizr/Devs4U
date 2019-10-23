'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Developers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      workHours: {
        type: Sequelize.INTEGER
      },
      developerType: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER
      },
      languages: {
        type: Sequelize.ARRAY(Sequelize.TEXT) 
      },
      skills: {
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
    return queryInterface.dropTable('Developers');
  }
};