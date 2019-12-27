'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    destinatarioId: DataTypes.INTEGER,
    creadorId: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    calificacion: DataTypes.INTEGER
  },  {freezeTableName: true});
  Review.associate = function(models) {
    Review.belongsTo(models.User, {foreignKey: 'creadorId', as:'creador'});
    Review.belongsTo(models.User, {foreignKey: 'destinatarioId', as:'destinatario'});
  };
  return Review;
};