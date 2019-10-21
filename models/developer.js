'use strict';
module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    workHours: DataTypes.INTEGER,
    developerType: DataTypes.STRING,
    expierence: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Developer.associate = function(models) {
    // associations can be defined here
  };
  return Developer;
};