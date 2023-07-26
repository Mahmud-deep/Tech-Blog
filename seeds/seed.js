const seedUsers = require('./users');
const seedPosts = require('./posts');
const seedComments = require('./Comments');

const sequelize = require('../config/connection');

const seedAll = async() => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();
