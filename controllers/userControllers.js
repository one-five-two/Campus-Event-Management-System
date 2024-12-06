const User = require('../models/user');

const registerUser = async (req, res) => {
    const { name, email, password, preferences } = req.body;

    try {
        const user = new User({ name, email, password, preferences });
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { registerUser };
