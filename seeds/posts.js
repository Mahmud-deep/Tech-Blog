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
    title: 'What is socializing?',
    post_text: 'Gaining someones confidence is easy. Appear open and interested by mimicking their body language and repeating what they say back to them. I just repeat what they say. I was social engineering them. Once trust is established, the social engineer simply offers up information, and the subject will reciprocate: Pets names, kids names, birthdays. Then, that information is entered into a word list generator. Pop it with their hash into John The Ripper, and within minutes, you have their passwords.',
    user_id: 4
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;