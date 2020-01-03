'use strict';
module.exports = (sequelize, DataTypes) => {
  const Experiencia = sequelize.define('Experiencia', {
    freelancerId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    nombreEmpresa:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
          notEmpty: true
        }},
    descripcion: DataTypes.TEXT,
    cargo: {
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
        }}
  },  {freezeTableName: true});
  Experiencia.associate = function(models) {
    Experiencia.belongsTo(models.User,{foreignKey:'freelancerId',as:'usuarioInfo'})

  };
  return Experiencia;
};