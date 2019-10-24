'use strict';
module.exports = (sequelize, DataTypes) => {
  const Portfolio = sequelize.define('Portfolio', {
    name: DataTypes.STRING,
    projectType: DataTypes.STRING,
    linkSee: DataTypes.STRING,
    linkCode: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING
  }, {});
  Portfolio.associate = function(models) {
    // associations can be defined here
  };
  return Portfolio;
};