'use strict';


let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkInsert(options, [
      {
        userId: 1,
        spotId: 1,
        review: 'Great',
        stars: 5,
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Good.',
        stars: 4,
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Bad.',
        stars: 3,
      },
      {
        userId: 3,
        spotId: 3,
        review: 'Will Herrington came to visit wish we could give 6 stars',
        stars: 5,
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options, null, {});
  }
};
