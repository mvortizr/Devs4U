'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contractor = sequelize.define('Contractor', {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    }
  }, {freezeTableName: true});
  Contractor.associate = function(models) {
    // associations can be defined here
  };
  return Contractor;
};