// Import the Express router
const router = require('express').Router();

// Import route modules for users, posts, and comments
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Mount the user routes at the '/users' path
router.use('/users', userRoutes);

// Mount the post routes at the '/posts' path
router.use('/posts', postRoutes);

// Mount the comment routes at the '/comments' path
router.use('/comments', commentRoutes);

// Export the router to be used in other parts of the application
module.exports = router;

//This code defines a central routing module that organizes different 
//sets of routes for users, posts, and comments, and mounts them under specific paths. 
//This structure helps keep the codebase organized and modular

