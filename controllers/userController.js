const { validationResult } = require('express-validator');
const validation = require('../utils/validation');
const User = require('../models/User');

// Register User API controller
const registerUser = async (req, res) => {
  // Validate request body using express-validator
  validation.registerUserValidation(req);

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    // Create new user in the database
    const newUser = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    // Return success response
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    // Handle database error or any other error that occurred during user registration
    res.status(500).json({ message: 'Failed to register user' });
  }
};

module.exports = {
  registerUser,
};
