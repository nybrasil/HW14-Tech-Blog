// Import the Express router
const router = require('express').Router();

// Import the Comment model from the models directory
const { Comment } = require('../../models/');

// Import the apiGuard middleware function for authentication
const { apiGuard } = require('../../utils/authGuard');

// Define a POST route for creating a new comment
router.post('/', apiGuard, async (req, res) => {
  try {
    // Create a new comment using the Comment model and data from the request body
    // Spread the properties of req.body into the new comment object
    // Assign the userId from the session to the new comment
    const newComment = await Comment.create({
      ...req.body,
      userId: req.session.user_id,
    });
    
    // Send the newly created comment as a JSON response
    res.json(newComment);
  } catch (err) {
    // If there is an error, send a 500 status code and the error message as JSON
    res.status(500).json(err);
  }
});

// Export the router to be used in other parts of the application
module.exports = router;

//This code is an Express route module that handles the creation of new comments. 
//It uses middleware to ensure the user is authenticated before allowing them to post a comment. 
//The comments include explanations for each part of the code, making it easier to understand its purpose and functionality.