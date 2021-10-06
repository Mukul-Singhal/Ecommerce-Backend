const route = require("express").Router();

route.get("/users", (req, res) => {
  res.send("users");
});

module.exports = route;
