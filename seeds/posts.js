const { Post } = require('../models');

const postData = [
  {
    title: 'Why MVC is do important',
    post_text: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the View layer for design, and the Controller layer for application logic.',
    user_id: 1
  },
  {
    title: 'Authentication vs. Authorization',
    post_text: 'There is a difference between authentication and authorization. Authentication means confirming your own identity, whereas authorization means being allowed access to the system.',
    user_id: 2
  },
  {
    title: 'Object-Relational Mapping',
    post_text: 'I have really loved learning about ORMs. It is really simplified the way i create queries in SQL!',
    user_id: 3
  },
  {
    title: 'Why Github is important?',
    post_text: 'It makes it easy to contribute to your open-source projects To be honest, nearly every open-source project uses GitHub to manage its project.',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;