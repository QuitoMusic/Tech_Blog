const bcrypt = require('bcrypt');
const { User, Post, Comment } = require('../models');

const controller = {
  // User Authentication Controllers
  signup: async (req, res) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      await User.create({
        username,
        password: hashedPassword,
      });

      res.redirect('/login');
    } catch (error) {
      res.status(500).send('Error signing up');
    }
  },

  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({
        where: { username },
      });

      if (!user) {
        return res.status(404).send('User not found');
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        req.session.user = user;
        res.redirect('/dashboard');
      } else {
        res.status(401).send('Invalid credentials');
      }
    } catch (error) {
      res.status(500).send('Error logging in');
    }
  },

  logout: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send('Error logging out');
      } else {
        res.redirect('/login');
      }
    });
  },

  // Blog Post Controllers
  homepage: async (req, res) => {
    try {
      const posts = await Post.findAll({
        include: [{ model: User }],
        order: [['createdAt', 'DESC']],
      });

      res.render('homepage', { posts });
    } catch (error) {
      res.status(500).send('Error fetching blog posts');
    }
  },

  showPost: async (req, res) => {
    try {
      const postId = req.params.id;
      const post = await Post.findByPk(postId, {
        include: [{ model: User }, { model: Comment, include: [{ model: User }] }],
      });

      if (!post) {
        return res.status(404).send('Post not found');
      }

      res.render('post', { post });
    } catch (error) {
      res.status(500).send('Error fetching blog post');
    }
  },

  createPost: async (req, res) => {
    try {
      const { title, content } = req.body;
      const userId = req.session.user.id;

      await Post.create({
        title,
        content,
        user_id: userId,
      });

      res.redirect('/dashboard');
    } catch (error) {
      res.status(500).send('Error creating a new post');
    }
  },

  deletePost: async (req, res) => {
    try {
      const postId = req.params.id;
      await Post.destroy({
        where: { id: postId },
      });

      res.redirect('/dashboard');
    } catch (error) {
      res.status(500).send('Error deleting the post');
    }
  },

  // Comment Controllers
  createComment: async (req, res) => {
    try {
      const { content } = req.body;
      const postId = req.params.id;
      const userId = req.session.user.id;

      await Comment.create({
        content,
        post_id: postId,
        user_id: userId,
      });

      res.redirect(`/post/${postId}`);
    } catch (error) {
      res.status(500).send('Error creating a new comment');
    }
  },

  deleteComment: async (req, res) => {
    try {
      const commentId = req.params.id;
      const comment = await Comment.findByPk(commentId);

      if (!comment) {
        return res.status(404).send('Comment not found');
      }

      if (comment.user_id === req.session.user.id) {
        await comment.destroy();
        res.redirect(`/post/${comment.post_id}`);
      } else {
        res.status(401).send('Unauthorized to delete the comment');
      }
    } catch (error) {
      res.status(500).send('Error deleting the comment');
    }
  },
};

module.exports = controller;
