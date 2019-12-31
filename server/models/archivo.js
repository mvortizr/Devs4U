'use strict';
module.exports = (sequelize, DataTypes) => {
  const archivo = sequelize.define('archivo', {
    projectId: DataTypes.INTEGER,
    filePath: DataTypes.STRING
  }, {});
  archivo.associate = function(models) {
    // associations can be defined here
  };
  return archivo;
};