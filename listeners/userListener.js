const userService = require("../services/userService");
const userEvent = require("../events/userEvents");
const logger = require("../utils/logger");

userService.on(userEvent.USER_REGISTERED, (data) => {
  console.log(`Event triggered: User Registered - ${data.username}`);
  logger.logEvent(userEvent.USER_REGISTERED, data);
});

userService.on(userEvent.USER_LOGGED_IN, (data) => {
  console.log(`Event triggered: User Logged In - ${data.username}`);
  logger.logEvent(userEvent.USER_LOGGED_IN, data);
});
