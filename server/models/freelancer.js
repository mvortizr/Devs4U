'use strict';
module.exports = (sequelize, DataTypes) => {
  const Freelancer = sequelize.define('Freelancer', {
    usuarioId: DataTypes.INTEGER,
    tiempoExperiencia: DataTypes.STRING,
    tipoFreelancer: DataTypes.STRING,
    status: DataTypes.STRING,
    habilidades:DataTypes.ARRAY(DataTypes.TEXT),
    /*seniority:{
      type: DataTypes.STRING,
    },*/
  }, {freezeTableName: true});
  Freelancer.associate = function(models) {
    // associations can be defined here
  };
  return Freelancer;
};