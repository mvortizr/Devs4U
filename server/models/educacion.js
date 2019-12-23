'use strict';
module.exports = (sequelize, DataTypes) => {
  const Educacion = sequelize.define('Educacion', {
    freelancerId: DataTypes.INTEGER,
    tituloObtenido: DataTypes.STRING,
    anoInicio: DataTypes.INTEGER,
    anoFin: DataTypes.INTEGER
  });
  Educacion.associate = function(models) {
    
  };
  return Educacion;
};