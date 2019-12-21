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


    apellido: {
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


    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(email,next) {
          const model=require('../models');
          model.User.findAll({where: {email: email}})
          .done((user) => {
            if (user!='')   return next('the user is already exist');
            next();
          });
        }
      }
    },
    

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },

    /*
    foto: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },

    seniority:{
      type: DataTypes.STRING,
    },

    */

    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
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
    idiomas:DataTypes.ARRAY(DataTypes.TEXT),
    twitter: DataTypes.STRING
  }, {freezeTableName: true});
  User.associate = function(models) {
    User.hasOne(models.Contractor,{ foreignKey: 'usuarioId', as: 'contratista'});
    User.hasOne(models.Freelancer, { foreignKey: 'usuarioId',as:'freelancer'})
  };
  return User;
};