const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Comment Example 1",
    post_id: 3,
    user_id: 1
  },
  {
    comment_text: "Comment Example 2",
    post_id: 1,
    user_id: 4
  },
  {
    comment_text: "Comment Example 3",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
