'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    destinatarioId: DataTypes.INTEGER,
    creadorId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  },  {freezeTableName: true});
  Review.associate = function(models) {
    // associations can be defined here
  };
  return Review;
};