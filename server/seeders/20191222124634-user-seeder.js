'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [
      {
        nombre: 'Hermes',
        apellido:'Sanchez',
        rol:'freelancer',
        email: 'hermessamuel10@hotmail.com',
        password: '123456',
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
        email: 'Mariatua2@gmail.com',
        password: '123456',
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
        email: 'rabindra1@gmail.com',
        password: '123456',
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
        email: 'zacarias@gmail.com',
        password: '123456',
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
