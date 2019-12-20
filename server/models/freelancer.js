'use strict';
module.exports = (sequelize, DataTypes) => {
  const Freelancer = sequelize.define('Freelancer', {
    usuarioId: DataTypes.INTEGER,
    tiempoExperiencia: DataTypes.STRING,
    tipoFreelancer: DataTypes.STRING,
    status: DataTypes.STRING
  }, {});
  Freelancer.associate = function(models) {
    // associations can be defined here
  };
  return Freelancer;
};