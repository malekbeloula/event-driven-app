const { registerUser, loginUser } = require("./publishers/userPublisher");
require("./listeners/userListener");

console.log("🚀 Event-Driven Application Started");

registerUser("Malek");
loginUser("Malek");
