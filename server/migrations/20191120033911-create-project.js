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
      contractorId: {
        type: Sequelize.INTEGER
      },
      developerId: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      projectStage: {
        type: Sequelize.STRING
      },
      projectType: {
        type: Sequelize.STRING
      },
      availabilityRequired: {
        type: Sequelize.INTEGER
      },
      technologies: {
        type: Sequelize.JSON
      },
      additionalInformation: {
        type: Sequelize.TEXT
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