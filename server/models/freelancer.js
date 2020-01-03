'use strict';
module.exports = (sequelize, DataTypes) => {
  const Freelancer = sequelize.define('Freelancer', {
    usuarioId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    tiempoExperiencia: { type: DataTypes.STRING},
    tipoFreelancer:{ type: DataTypes.STRING},
    status: { type: DataTypes.STRING},
    habilidades:DataTypes.ARRAY(DataTypes.TEXT),
    seniority:{type: DataTypes.STRING},
    
  }, {freezeTableName: true});
  Freelancer.associate = function(models) {
    // associations can be defined here
  };
  return Freelancer;
};