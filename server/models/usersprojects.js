'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersProjects = sequelize.define('UsersProjects', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.INTEGER
  }, {});
  UsersProjects.associate = function(models) {
  };
  return UsersProjects;
};