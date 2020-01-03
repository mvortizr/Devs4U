'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Project', [
      {

                titulo:'Proyecto Con laravl',
                etapa: 0,
                tipo: 'Laravel',
                descripcion: 'Es un proyecto en laravel acerca de una web',
                presupuesto: '20000 bs',
                creadorId: 3,
                encargadoId:1,
                entregables: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat.",
                visiblePortafolio:true,
                objetivos:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
                tecnologias:["html", "css", "javaScript","Web Dev",'laravel'],
                adicionales:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
                createdAt: new Date(),
                updatedAt: new Date()
      },
      {
        titulo:'Proyecto Con Node',
        etapa: 0,
        tipo: 'Laravel',
        descripcion: 'Es un proyecto en laravel acerca de una web',
        presupuesto: '20000 bs',
        creadorId: 4,
        encargadoId:2,
        entregables: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat.",
        visiblePortafolio:true,
        objetivos:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        tecnologias:["html", "css", "javaScript","Web Dev",'laravel'],
        adicionales:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
