'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },


    apellido: {
      type: DataTypes.STRING,
    },

    rol:{
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },


    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        isUnique(email,next) {
          const model=require('../models');
          model.User.findAll({where: {email: email}})
          .done((user) => {
            if (user!='')   return next('Existe un usuario registrado con el mismo correo');
            next();
          });
        }
      }
    },
    

    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },

    
    foto: {
      type: DataTypes.STRING,    
    },


    pais: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ciudad: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    calificacionesMedia: {
      type: DataTypes.FLOAT,
      validate:{
        isFloat: true
      }
    },
    sobreMi: DataTypes.TEXT,
    descripcionCorta: DataTypes.STRING,
    web: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    idiomas:DataTypes.ARRAY(DataTypes.TEXT),
    twitter: DataTypes.STRING
  }, {freezeTableName: true});
  User.associate = function(models) {
    User.hasOne(models.Contractor,{ foreignKey: 'usuarioId', as: 'contractor'});
    User.hasOne(models.Freelancer, { foreignKey: 'usuarioId',as:'freelancer'})

    User.belongsToMany(models.Project, {through: 'IntPostulationProject', foreignKey: 'usuarioId', as: 'proyectosPostulados',otherKey: 'proyectoId'})
    
    //Relaciones del review
    User.hasMany(models.Review,{foreignKey:'creadorId',as:'creadorReview'})
    User.hasMany(models.Review,{foreignKey:'destinatarioId',as:'destinatarioReview'})

    //Relaciones de la informacion adicional de un freelancer
    User.hasMany(models.Educacion,{foreignKey:'freelancerId',as:'educacion'})
    User.hasMany(models.Experiencia,{foreignKey:'freelancerId',as:'experiencia'})


    //Relaciones de los proyectos
    User.hasMany(models.Project, {as: 'proyectosCreados', foreignKey:'creadorId',onDelete: 'CASCADE'})
    User.hasMany(models.Project, {as: 'proyectosEncargados', foreignKey:'encargadoId'})
  };
  return User;
};
//npx sequelize-cli model:generate --name Proyecto --attributes NM_Proyect:string,TP_Proyect:string,Srg_Proyect:string,Dp_Req:string,UsedTech:text, Entregables: string, Ad_Dat: text, contratistId: integer
//npx sequelize-cli model:generate --name developer --attributes workHours:integer,developerType:string,expierece:string,userId:integer
//npx sequelize-cli model:generate --name user --attributes firstName:string,lastName:string,email:string,password:string,aboutMe:string,residence:string,web:string,rol:string
//npx sequelize-cli model:generate --name iteracion --attributes ContractorCode:integer,Begining:timestamp,Ending:timestamp,IterationNumber:integer,IterationDesc:text
/*npx sequelize-cli model:generate --name Project --force --attributes description:text,entregables:text,tecnologies:array:text,photos:string,etapa:string,additionals:text,disponibilidad:string,projectType:string */
//npx sequelize-cli db:migrate
/*npx sequelize migration:generate --name Project add-associations*/
//https://medium.com/@andrewoons/how-to-define-sequelize-associations-using-migrations-de4333bf75a7