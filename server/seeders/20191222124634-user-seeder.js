'use strict';
<<<<<<< HEAD

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
=======
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        nombre: 'Hermes',
        apellido:'Sanchez',
        rol:'freelancer',
        email: '1@1.com',
        password:'$2a$10$HXQowD0NbH.JINzeAnioHeAoF41lycDZYl91nbs6yqAdYTZq7Y09e',
        foto: 'xxx',
        pais: 'venezuela',
        ciudad: 'caracas',
        calificacionesMedia: 3,
        sobreMi: 'Soy un desarrollador que odiaba node pero ahora le estoy agarrando cariño',
        descripcionCorta: 'desarrollador',
        web: '',
        linkedin: '',
        facebook: 'https://www.facebook.com/hermesss1',
        instagram: 'https://www.instagram.com/hermessamuel10/',
        idiomas:['español','ingles'],
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Maria',
        apellido:'Veronica',
        rol:'freelancer',
        email: '2@2.com',
        password: '$2a$10$HXQowD0NbH.JINzeAnioHeAoF41lycDZYl91nbs6yqAdYTZq7Y09e',
        foto: 'xxx',
        pais: 'venezuela',
        ciudad: 'caracas',
        calificacionesMedia: 2,
        sobreMi: 'Soy una desarrolladora, Hola',
        descripcionCorta: 'desarrollador',
        web: '',
        linkedin: '',
        facebook: 'https://www.facebook.com/hermesss1',
        instagram: 'https://www.instagram.com/hermessamuel10/',
        idiomas:['español','ingles'],
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Rabindra',
        apellido:'Harichand',
        rol:'contractor',
        email: '3@3.com',
        password: '$2a$10$HXQowD0NbH.JINzeAnioHeAoF41lycDZYl91nbs6yqAdYTZq7Y09e',
        foto: 'xxx',
        pais: 'venezuela',
        ciudad: 'caracas',
        calificacionesMedia: 2,
        sobreMi: 'Soy un contratista de guyana francesa, Hola',
        descripcionCorta: 'contractor',
        web: '',
        linkedin: '',
        facebook: 'https://www.facebook.com/hermesss1',
        instagram: 'https://www.instagram.com/hermessamuel10/',
        idiomas:['español','ingles'],
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    {

        nombre: 'David',
        apellido:'Zacarias',
        rol:'contractor',
        email: '4@4.com',
        password: '$2a$10$HXQowD0NbH.JINzeAnioHeAoF41lycDZYl91nbs6yqAdYTZq7Y09e',
        foto: 'xxx',
        pais: 'venezuela',
        ciudad: 'caracas',
        calificacionesMedia: 2,
        sobreMi: 'Soy un contratista que no es  guyana francesa, Hola',
        descripcionCorta: 'contractor',
        web: '',
        linkedin: '',
        facebook: 'https://www.facebook.com/hermesss1',
        instagram: 'https://www.instagram.com/hermessamuel10/',
        idiomas:['español','ingles'],
        twitter: '',
        createdAt: new Date(),
        updatedAt: new Date()

    }
    
    
    
    
    
    
    
    
    
    ], {freezeTableName: true});
    },






    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('User', null, {});
    }
};
>>>>>>> backend-Hermes3
