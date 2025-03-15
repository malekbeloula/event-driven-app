const userService = require('../services/userService');

const registerUser = (username) => {
    userService.registerUser(username);
};

const loginUser = (username) => {
    userService.loginUser(username);
};

module.exports = { registerUser, loginUser };
