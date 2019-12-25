'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experiencia = sequelize.define('Experiencia', {
    freelancerId: DataTypes.INTEGER,
    nombreEmpresa: DataTypes.STRING,
    descripcion: DataTypes.TEXT,
    cargo: DataTypes.STRING,
    anoInicio: DataTypes.INTEGER,
    anoFin: DataTypes.INTEGER
  },  {freezeTableName: true});
  Experiencia.associate = function(models) {
    // associations can be defined here
  };
  return Experiencia;
};