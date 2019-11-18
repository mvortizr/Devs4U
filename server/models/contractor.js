'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contractor = sequelize.define('Contractor', {
    workSearch: DataTypes.STRING,
    enterprise: DataTypes.STRING,
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
  }, {});
  Contractor.associate = function(models) {
    // associations can be defined here
  };
  return Contractor;
};