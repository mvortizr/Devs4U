'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contractor = sequelize.define('Contractor', {
    workSearch: DataTypes.STRING,
    enterprise: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  }, {});
  Contractor.associate = function(models) {
    // associations can be defined here
  };
  return Contractor;
};