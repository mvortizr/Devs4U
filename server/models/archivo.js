'use strict';
module.exports = (sequelize, DataTypes) => {
  const archivo = sequelize.define('archivo', {
    projectId: DataTypes.INTEGER,
    filePath: DataTypes.STRING
  }, {});
  archivo.associate = function(models) {
    archivo.belongsTo(models.Project, {foreignKey: 'projectId', as:'proyect'});
  };
  return archivo;
};