const EventEmiiter = require("events");
const userEvents = require("../events/userEvents");

class UserService extends EventEmiiter {
  registerUser(username) {
    console.log(`Registering user ${username}`);
    this.emit(userEvents.USER_REGISTERED, { username });
  }

  loginUser(username) {
    console.log(`User logged in ${username}`);
    this.emit(userEvents.USER_LOGGED_IN, { username });
  }
}

module.exports = new UserService();
