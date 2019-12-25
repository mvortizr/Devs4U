'use strict';
module.exports = (sequelize, DataTypes) => {
  const IntPostulationProject = sequelize.define('IntPostulationProject', {
    usuarioId: DataTypes.INTEGER,
    proyectoId: DataTypes.INTEGER
  }, {freezeTableName: true});
  IntPostulationProject.associate = function(models) {
    IntPostulationProject.belongsTo(models.User, {foreignKey: 'usuarioId'})
    IntPostulationProject.belongsTo(models.Project, {foreignKey: 'proyectoId'})
  };
  return IntPostulationProject;
};