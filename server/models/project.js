'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    contractorId: DataTypes.INTEGER,
    developerId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    projectStage: DataTypes.STRING,
    projectType: DataTypes.STRING,
    availabilityRequired: DataTypes.INTEGER,
    technologies: DataTypes.JSON,
    additionalInformation: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    Project.hasOne(models.User, {foreignKey: 'id', as: 'contractor'})
    Project.hasOne(models.User, {foreignKey: 'id', as: 'developer'})
  };
  return Project;
};