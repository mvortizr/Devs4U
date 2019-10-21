'use strict';
module.exports = (sequelize, DataTypes) => {
  const Skill = sequelize.define('Skill', {
    userId: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {});
  Skill.associate = function(models) {
    // associations can be defined here
  };
  return Skill;
};