const { User } = require('../models');

const userData = [
  {
    username: 'Xandromus',
    password: 'password'
  },
  {
    username: 'Xandromus',
    password: 'password'
  },
  {
    username: 'Lernantio',
    password: 'password'
  },
  {
    username: 'Lernantio',
    password: 'password'
  },
];

const seedUsers = () => User.bulkCreate(userData, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUsers;