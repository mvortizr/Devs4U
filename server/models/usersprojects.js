'use strict';
module.exports = (sequelize, DataTypes) => {
  const UsersProjects = sequelize.define('UsersProjects', {
    projectId: DataTypes.INTEGER,
    developerId: DataTypes.INTEGER,
    contractorId: DataTypes.INTEGER
  }, {});
  UsersProjects.associate = function(models) {
    UsersProjects.belongsTo(models.User,{foreingKey:'developerId'})
    UsersProjects.belongsTo(models.User,{foreingKey:'contractorId'})
    UsersProjects.belongsTo(models.Project,{foreingKey:'projectId'})
  };
  return UsersProjects;
};