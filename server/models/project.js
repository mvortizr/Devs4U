'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    contractorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
       notEmpty: true,
       isInt: true
      }
    },
    developerId:  {
      type: DataTypes.INTEGER,
      validate:{
       isInt: true
      }
    },
    description: DataTypes.TEXT,
    projectStage: DataTypes.STRING,
    projectType: DataTypes.STRING,
    availabilityRequired: {
      type: DataTypes.INTEGER,
      validate:{
       isInt: true
      }
    } ,
    technologies: DataTypes.JSON,
    additionalInformation: DataTypes.TEXT
  }, {});
  Project.associate = function(models) {
    Project.hasOne(models.User, {foreignKey: 'id', as: 'contractor'})
    Project.hasOne(models.User, {foreignKey: 'id', as: 'developer'})
  };
  return Project;
};