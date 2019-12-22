'use strict';
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
