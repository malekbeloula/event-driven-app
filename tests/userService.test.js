const userService = require("../services/userService");
const userEvents = require("../events/userEvents");

describe("UserService Event Emission", () => {
  test("should emit USER_REGISTERED event", (done) => {
    userService.on(userEvents.USER_REGISTERED, (data) => {
      expect(data.username).toBe("Malik");
      done();
    });
    userService.registerUser("Malik");
  });

  test("should emit USER_LOGGED_IN event", (done) => {
    userService.on(userEvents.USER_LOGGED_IN, (data) => {
      expect(data.username).toBe("Malik");
      done();
    });
    userService.loginUser("Malik");
  });
});
