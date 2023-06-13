const { body } = require('express-validator');

// Validation rules for Register User API
const registerUserValidation = (req) => {
  return [
    body('username').notEmpty().withMessage('Username is required'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    body('password').notEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password should be at least 6 characters long'),
  ];
};

module.exports = {
  registerUserValidation,
};
