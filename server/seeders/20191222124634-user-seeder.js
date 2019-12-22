'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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


/*
{
    titulo: "Proyecto Telefonica",
    tipo: "Desarrollo Web",
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat. Phasellus lectus est, egestas nec auctor id, vestibulum vitae massa. Nullam eget diam accumsan, elementum enim in, dignissim tellus. Fusce sed leo rutrum, feugiat odio eu, vestibulum mauris. Cras sem erat, elementum nec auctor quis, pretium eu turpis. Curabitur placerat leo sit amet pellentesque suscipit. Fusce iaculis diam a risus interdum, in rutrum tellus congue. Etiam et ligula purus. Aenean rhoncus tincidunt sem, nec hendrerit justo ornare id. Suspendisse tempus id quam sodales faucibus. In dictum sollicitudin egestas. ",
    presupuesto: "20000 Bs",
    entregables: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat.",
 
    objetivos:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
    tecnologias:["html", "css", "javaScript","Web Dev"],
    adicionales:["Lorem ipsum dolor sit amet, consectetur adipiscing elit", "Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
  }*/


  /*
  {	"titulo":"Proyecto Telefonica",
	"tipo":"Desarrollo Web",
	"descripcion":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat. Phasellus lectus est, egestas nec auctor id, vestibulum vitae massa. Nullam eget diam accumsan, elementum enim in, dignissim tellus. Fusce sed leo rutrum, feugiat odio eu, vestibulum mauris. Cras sem erat, elementum nec auctor quis, pretium eu turpis. Curabitur placerat leo sit amet pellentesque suscipit. Fusce iaculis diam a risus interdum, in rutrum tellus congue. Etiam et ligula purus. Aenean rhoncus tincidunt sem, nec hendrerit justo ornare id. Suspendisse tempus id quam sodales faucibus. In dictum sollicitudin egestas.",
	"presupuesto":"20000 Bs",
	"entregables":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante tortor, pretium at lacus nec, scelerisque congue augue. Maecenas tincidunt sollicitudin enim id feugiat.",
	"objetivos":["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"],
	"tecnologias":["html","css","javaScript","Web Dev"],
	"adicionales":["Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit","Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
}*/