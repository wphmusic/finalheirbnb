'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "Bookings";
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        userId: 1,
        startDate: '2023-08-01',
        endDate: '2023-08-07',
      },
      {
        spotId: 2,
        userId: 2,
        startDate: '2023-08-10',
        endDate: '2023-08-15',
      },
      {
        spotId: 3,
        userId: 1,
        startDate: '2023-08-01',
        endDate: '2023-08-10',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = "Bookings";
    return queryInterface.bulkDelete(options, null, {});
  }
};
