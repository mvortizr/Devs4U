'use strict';
module.exports = (sequelize, DataTypes) => {
  const PortfolioProject = sequelize.define('PortfolioProject', {
    name: DataTypes.STRING,
    projectType: DataTypes.STRING,
    linkSee: DataTypes.STRING,
    linkCode: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  PortfolioProject.associate = function(models) {
    // associations can be defined here
  };
  return PortfolioProject;
};