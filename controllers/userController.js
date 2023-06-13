const { v4: uuidv4 } = require('uuid');
const User = require('../models/User');

const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const uuid=uuidv4();
        const currTime =new Date();
        const user = await User.create({ uuid, username, email, password, currTime, currTime });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

module.exports = {
  registerUser,
};