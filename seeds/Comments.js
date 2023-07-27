const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'True',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Loved it.',
    user_id: 1,
    post_id: 3
  },
  {
    comment_text: 'Github is repository',
    user_id: 2,
    post_id: 4
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;