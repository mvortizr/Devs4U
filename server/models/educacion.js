'use strict';
module.exports = (sequelize, DataTypes) => {
  const Educacion = sequelize.define('Educacion', {
    freelancerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    tituloObtenido: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }},

    institucion:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
    }},
    anoInicio:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    anoFin:{ 
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }

    }
  },{freezeTableName: true});
  Educacion.associate = function(models) {

    Educacion.belongsTo(models.User,{foreignKey:'freelancerId',as:'usuarioInfo'})
  };
  return Educacion;
};