'use strict';
module.exports = (sequelize, DataTypes) => {
  const Notificacion = sequelize.define('Notificacion', {
    leida: DataTypes.BOOLEAN,
    titulo: DataTypes.STRING,
    vinculo: DataTypes.STRING,
    fecha: DataTypes.DATE,
    descripcion: DataTypes.TEXT,
    usuarioId: DataTypes.INTEGER
  }, {});
  Notificacion.associate = function(models) {
    // associations can be defined here
  };
  return Notificacion;
};