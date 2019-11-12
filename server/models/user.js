'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    web: DataTypes.STRING,
    rol: DataTypes.STRING,
    photo: DataTypes.STRING,
    residence: DataTypes.STRING,
    socialNetworks: DataTypes.JSON,
    available: DataTypes.STRING,
    experience: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasOne(models.Developer,{foreignKey: 'userId', as: 'developer'});
    User.hasOne(models.Contractor,{foreignKey: 'userId', as: 'contractor'});

  };
  return User;
};