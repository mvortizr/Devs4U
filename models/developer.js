'use strict';
module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    workHours: DataTypes.INTEGER,
    developerType: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    languages: DataTypes.ARRAY(DataTypes.TEXT),
    skills: DataTypes.ARRAY(DataTypes.TEXT) 
  }, {});
  Developer.associate = function(models) {
    // associations can be defined here
  };
  return Developer;
};