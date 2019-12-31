'use strict';
module.exports = (sequelize, DataTypes) => {
  //Falta archivos asociados y chat
  const Project = sequelize.define('Project', {
    titulo: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }},
    etapa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    tipo: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }},
    descripcion: DataTypes.TEXT,
    presupuesto: { 
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notEmpty: true
      }},
    creadorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    encargadoId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notEmpty: true,
        isInt: true
      }
    },
    entregables: DataTypes.TEXT,
    visiblePortafolio: DataTypes.BOOLEAN,
    objetivos:DataTypes.ARRAY(DataTypes.TEXT),
    tecnologias:DataTypes.ARRAY(DataTypes.TEXT),
    adicionales:DataTypes.ARRAY(DataTypes.TEXT),
  }, {freezeTableName: true});
  Project.associate = function(models) {  
    Project.hasMany(models.archivo,{foreignKey:'projectId',as:'archivo'})  
    Project.belongsTo(models.User, {foreignKey: 'creadorId', as:'creador',onDelete: 'CASCADE'});
    Project.belongsTo(models.User, {foreignKey: 'encargadoId', as:'encargado'});

    Project.hasMany(models.ProjectStage, {foreignKey:'proyectoId',as: 'etapasInfo'})
    Project.belongsToMany(models.User, {through: 'IntPostulationProject', foreignKey: 'proyectoId', as: 'usuariosPostulados',otherKey: 'usuarioId'})
  };

  Project.addHook('afterBulkUpdate', (project, options) => {
    if(project.attributes.etapa!=undefined){

      Project.findAll({where: {id: project.where.id}})
      .then(function(proyecto){
        let usuarioId,descripcion
        if(proyecto[0].etapa==2){
          usuarioId=proyecto[0].creadorId
          descripcion='Creador, se ha cambiado a reivision'}

        if(proyecto[0].etapa==3){
          usuarioId=proyecto[0].encargadoId
          descripcion='Desarrollador, se ha cambiado a finalizacion'
        }
        if(proyecto[0].etapa==1){
          usuarioId=proyecto[0].encargadoId
          descripcion='Desarrollador, se ha cambiado a ejecucion '
        }

        let notificacion={
          leida:false,
          titulo:'Cambio de etapa del proyecto:'+ proyecto[0].titulo ,
          vinculo:'',
          fecha:Date(),
          descripcion: descripcion,
          usuarioId: usuarioId
        }

        var notifiacionController=require('../controllers/NotificacionController')
          notifiacionController.crearNotificacion(notificacion)
      })
    }
  });


  return Project;
};