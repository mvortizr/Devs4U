'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },



    rol:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },


    correo: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(correo,next) {
          const model=require('../models');
          model.User.findAll({where: {correo: correo}})
          .done((user) => {
            if (user!='')   return next('the user is already exist');
            next();
          });
        }
      }
    },
    



    contraseña: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },


    pais: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },

    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },

    calificacionesMedia: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: true
      }
    },
    sobreMi: DataTypes.TEXT,
    descripcionCorta: DataTypes.STRING,
    web: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    twitter: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Contratista,{ foreignKey: 'usuarioId', as: 'contratista'});
  };
  return User;
};