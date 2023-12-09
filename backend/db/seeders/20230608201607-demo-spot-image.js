'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA; 
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "SpotImages";
    return queryInterface(options, [
    {
      spotId: 1,
      url: 'http://placekitten.com/200/911',
      preview: true
    },
    {
      spotId: 1,
      url: 'http://placekitten.com/200/911',
      preview: false
    },
    {
      spotId: 2,
      url: 'http://placekitten.com/200/911',
      preview: true
    },
    {
      spotId: 3,
      url: 'http://placekitten.com/200/911',
      preview: true
    }
  ], {});
  },

  
};
