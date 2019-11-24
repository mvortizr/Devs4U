'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    lastName:  {
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
      },
      allowNull: false
  },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      } 
    },
    aboutMe: DataTypes.TEXT,
    web: DataTypes.STRING,
    rol: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    photo: DataTypes.STRING,
    residence: DataTypes.STRING,
    socialNetworks: DataTypes.JSON,
    available: DataTypes.STRING,
    experience: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    
    //Info Relationship 
    User.hasOne(models.Developer,{ foreignKey: 'userId', as: 'developer'});
    User.hasOne(models.Contractor,{foreignKey: 'userId', as: 'contractor'});

    //Project relationship
    User.hasMany(models.Project, {foreignKey: 'contractorId', as: 'contractorProject'})
    User.hasMany(models.Project, {foreignKey: 'developerId', as: 'developerProject'})
  };
  return User;
};