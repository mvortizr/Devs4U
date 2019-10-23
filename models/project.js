'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: DataTypes.STRING,
    contractor: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    entregables: DataTypes.TEXT,
    tecnologies: DataTypes.ARRAY(DataTypes.TEXT),
    photo: DataTypes.STRING,
    postulados: DataTypes.JSON,
    etapa: DataTypes.STRING,
    encargado: DataTypes.INTEGER,
    additionals: DataTypes.TEXT,
    disponibilidad: DataTypes.STRING,
    iteraciones: DataTypes.JSON,
    projectType: DataTypes.STRING
  }, {});
  Project.associate = function(models) {
    // associations can be defined here
  };
  return Project;
};