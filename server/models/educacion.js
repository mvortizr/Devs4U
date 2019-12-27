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

    Educacion.belongsTo(models.User,{foreignKey:'freelancerId',as:'usuarioInfo'})
  };
  return Educacion;
};