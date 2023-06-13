const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const validMiddleware = require("../middlewares/validMiddleware")

router.post('/register', validMiddleware, userController.registerUser);

module.exports = router;