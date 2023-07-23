const sequelize = require('../config/connection'); // Import the Sequelize instance
const { User, Post, Comment } = require('../models'); // Import the Sequelize models

const seedDatabase = async () => {
  await sequelize.sync({ force: true }); // Drops and recreates tables

  try {
    // Create sample users
    const users = await User.bulkCreate([
      {
        username: 'john_doe',
        password: 'password123',
      },
      {
        username: 'jane_smith',
        password: 'password456',
      },
    ]);

    // Create sample posts
    const posts = await Post.bulkCreate([
      {
        title: 'First Post',
        content: 'This is the content of the first post.',
        UserId: users[0].id, // Associate the post with the first user
      },
      {
        title: 'Second Post',
        content: 'This is the content of the second post.',
        UserId: users[1].id, // Associate the post with the second user
      },
    ]);

    // Create sample comments
    await Comment.bulkCreate([
      {
        text: 'This is a comment on the first post.',
        PostId: posts[0].id, // Associate the comment with the first post
        UserId: users[1].id, // Associate the comment with the second user
      },
      {
        text: 'This is another comment on the first post.',
        PostId: posts[0].id, // Associate the comment with the first post
        UserId: users[0].id, // Associate the comment with the first user
      },
      {
        text: 'This is a comment on the second post.',
        PostId: posts[1].id, // Associate the comment with the second post
        UserId: users[0].id, // Associate the comment with the first user
      },
    ]);

    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding the database:', error);
  }

  process.exit(0); // Exit the script after seeding the database
};

seedDatabase();