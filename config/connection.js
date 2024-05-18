// Import the Sequelize library, which is an ORM (Object-Relational Mapper) for Node.js
const Sequelize = require('sequelize');
// Load environment variables from a .env file into process.env
require('dotenv').config();

let sequelize;

// Check if the environment variable DB_URL is set (e.g., for a production environment)
if (process.env.DB_URL) {
  // If so, use the provided URL to connect to the database
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  // If DB_URL is not set, fall back to using individual database credentials from environment variables
  sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Database user
    process.env.DB_PASSWORD, // Database user
    {
      host: 'localhost',     // Hostname of the database server
      dialect: 'postgres'    
    }
  );
}
// Export the configured Sequelize instance for use in other parts of the application
module.exports = sequelize;


