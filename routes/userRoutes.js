const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const {validRegisterMiddleware, validLoginMiddleware} = require("../middlewares/validMiddleware");
const duplicateMiddleware = require("../middlewares/duplicateMiddleware")

router.post('/register', validRegisterMiddleware, duplicateMiddleware.duplicateMiddleware, userController.registerUser);
router.post('/login', validLoginMiddleware, userController.loginUser);
router.post("/logout", userController.logoutUser );
router.delete("/me", validLoginMiddleware ,userController.deleteUser);

module.exports = router;