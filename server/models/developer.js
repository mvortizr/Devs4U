'use strict';
module.exports = (sequelize, DataTypes) => {
  const Developer = sequelize.define('Developer', {
    workHours: DataTypes.INTEGER,
    developerType: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    languages: DataTypes.ARRAY(DataTypes.TEXT),
    skills: DataTypes.ARRAY(DataTypes.TEXT) 
  }, {});
  Developer.associate = function(models) {
  };
  return Developer;
};