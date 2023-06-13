// Example of authentication middleware
const isAuthenticated = (req, res, next) => {
    // Check if user is authenticated based on your authentication mechanism
    // For example, check for a valid token or session cookie
    if (req.user) {
      // User is authenticated
      next();
    } else {
      // User is not authenticated
      res.status(401).json({ message: 'Unauthorized' });
    }
  };
  
  module.exports = {
    isAuthenticated,
  };