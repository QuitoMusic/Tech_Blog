const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const Post = sequelize.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  
  //TO DO: Continue adding parameters to this model if missing 
});

module.exports = Post;