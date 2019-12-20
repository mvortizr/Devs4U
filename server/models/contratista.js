'use strict';
module.exports = (sequelize, DataTypes) => {
  const Contratista = sequelize.define('Contratista', {
    usuarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    }
  }, {});
  Contratista.associate = function(models) {
    // associations can be defined here
  };
  return Contratista;
};