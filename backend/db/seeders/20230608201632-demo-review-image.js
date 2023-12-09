'use strict';



let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  
}


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = "ReviewImages";
    return queryInterface(options, [
      {
        reviewId: 1,
        url: 'http://placekitten.com/200/911'
      },
      {
        reviewId: 2,
        url: 'http://placekitten.com/200/911'
      },
      {
        reviewId: 3,
        url: 'http://placekitten.com/200/911'
      },
      {
        reviewId: 4,
        url: 'http://placekitten.com/200/911'
      }
    ], {});
  },
};
