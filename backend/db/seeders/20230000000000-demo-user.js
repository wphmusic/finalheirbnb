// 'use strict';
// const bcrypt = require('bcryptjs');

// const userData = [
//   {
//     firstName: 'Bro',
//     lastName: 'Dude',
//     email: 'demo@user.io',
//     username: 'Demo-lition',
//     hashedPassword: bcrypt.hashSync('password'),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     firstName: 'Ken',
//     lastName: 'Fisher',
//     email: 'user1@user.io',
//     username: 'FakeUser1',
//     hashedPassword: bcrypt.hashSync('password2'),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {
//     firstName: 'Will',
//     lastName: 'Herrington',
//     email: 'user2@user.io',
//     username: 'FakeUser2',
//     hashedPassword: bcrypt.hashSync('password3'),
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
// ];

// module.exports = {
//   up: async (queryInterface) => {
//     return queryInterface.bulkInsert('Users', userData);
//   },

//   down: async (queryInterface, Sequelize) => {
//     const Op = Sequelize.Op;
//     const usernamesToDelete = userData.map((user) => user.username);

//     return queryInterface.bulkDelete('Users', {
//       username: { [Op.in]: usernamesToDelete },
//     });
//   },
// };

'use strict';
const bcrypt = require("bcryptjs");

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    return queryInterface.bulkInsert(options, [
      {
        firstName: 'Demo',
        lastName: 'User',
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password')
      },
      {
        firstName: 'Saman',
        lastName: 'Rana',
        email: 'saman@gmail.com',
        username: 'Samanarana',
        hashedPassword: bcrypt.hashSync('password2')
      },
      {
        firstName: 'Layla',
        lastName: 'Rana',
        email: 'puppy@gmail.com',
        username: 'Laylachewy',
        hashedPassword: bcrypt.hashSync('password3')
      },
      {
        firstName: 'Chewy',
        lastName: 'Rana',
        email: 'puppy2@gmail.com',
        username: 'Chewylayla',
        hashedPassword: bcrypt.hashSync('password4')
      },
      {
        firstName: 'Zane',
        lastName: 'Striker',
        email: 'zane.striker@edge.com',
        username: 'ZaneTheSlick',
        hashedPassword: bcrypt.hashSync('password5')
      },
      {
        firstName: 'Nova',
        lastName: 'Vortex',
        email: 'nova.vortex@spacemail.com',
        username: 'StarGaze_Nova',
        hashedPassword: bcrypt.hashSync('password6')
      },
      {
        firstName: 'Lyra',
        lastName: 'Frost',
        email: 'lyra.frost@coldzone.net',
        username: 'IceMaven',
        hashedPassword: bcrypt.hashSync('password7')
      },
      {
        firstName: 'Jax',
        lastName: 'Havoc',
        email: 'jax.havoc@chaosmail.com',
        username: 'HavocJax',
        hashedPassword: bcrypt.hashSync('password8')
      },
      {
        firstName: 'Sage',
        lastName: 'Pulsar',
        email: 'sage.pulsar@nebula.org',
        username: 'GalacticSage',
        hashedPassword: bcrypt.hashSync('password9')
      },
      {
        firstName: 'Echo',
        lastName: 'Drift',
        email: 'echo.drift@soundvoid.com',
        username: 'EchoInMotion',
        hashedPassword: bcrypt.hashSync('password10')
      },
      {
        firstName: 'Blaze',
        lastName: 'Ignite',
        email: 'blaze.ignite@firemail.com',
        username: 'BlazeInferno',
        hashedPassword: bcrypt.hashSync('password11')
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Users';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      username: { [Op.in]: ['Demo-lition', 'Samanarana', 'Laylachewy'] }
    }, {});
  }
};
