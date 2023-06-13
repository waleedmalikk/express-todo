const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Register User API
router.post('/register', userController.registerUser);

module.exports = router;