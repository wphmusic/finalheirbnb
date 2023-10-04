'use strict';
const bcrypt = require('bcryptjs');

const userData = [
  {
    firstName: 'Will',
    lastName: 'Herrington',
    email: 'demo@user.io',
    username: 'Demo-lition',
    hashedPassword: bcrypt.hashSync('password'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'Ken',
    lastName: 'Fisher',
    email: 'user1@user.io',
    username: 'FakeUser1',
    hashedPassword: bcrypt.hashSync('password2'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    firstName: 'Not Will',
    lastName: 'Herrington',
    email: 'user2@user.io',
    username: 'FakeUser2',
    hashedPassword: bcrypt.hashSync('password3'),
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
