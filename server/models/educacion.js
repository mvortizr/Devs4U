'use strict';
module.exports = (sequelize, DataTypes) => {
  const Educacion = sequelize.define('Educacion', {
    freelancerId: DataTypes.INTEGER,
    tituloObtenido: DataTypes.STRING,
    institucion:DataTypes.STRING,
    anoInicio: DataTypes.INTEGER,
    anoFin: DataTypes.INTEGER
  },{freezeTableName: true});
  Educacion.associate = function(models) {
    
  };
  return Educacion;
};