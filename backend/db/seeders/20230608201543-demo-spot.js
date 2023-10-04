'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    return queryInterface.bulkInsert(options, [
      {
        ownerId: 1,
        address: '49234800259 Nowhere Blvd',
        city: 'Maeve',
        state: 'Confusion',
        country: 'Confusionland',
        lat: 37.12345,
        lng: -122.67890,
        name: '',
        description: 'Do not come',
        price: 150.0,
        previewImage: 'https://www.google.com/'
      },
      {
        ownerId: 2,
        address: '353 Kanye West',
        city: 'Bobbys World',
        state: 'Unconsciousness',
        country: 'Drunkland',
        lat: 38.54321,
        lng: -121.98765,
        name: 'Spot 2',
        description: 'Do not come seriously',
        price: 150.0,
        previewImage: 'https://www.yahoo.com'
      },
      {
        ownerId: 1,
        address: '789 Oak St',
        city: 'South Park',
        state: 'Euphoria',
        country: 'Happyland',
        lat: 39.87654,
        lng: -120.34567,
        name: 'Spot 3',
        description: 'I said do not come',
        price: 150.0,
        previewImage: 'https://www.twitter.com/'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Spots";
    return queryInterface.bulkDelete(options, null, {});
  }
};
