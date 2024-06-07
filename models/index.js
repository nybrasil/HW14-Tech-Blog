const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'cascade',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'cascade',
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'cascade',
});


  module.exports = { User, Post, Comment };
