'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    destinatarioId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    creadorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    descripcion: DataTypes.STRING,
    calificacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
  },  {freezeTableName: true});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'creadorId', as:'creador'});
    Review.belongsTo(models.User, {foreignKey: 'destinatarioId', as:'destinatario'});
  };
  return Review;
};