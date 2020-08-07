const db = require("./models");

db.user.create({
  firstName: "han",
  lastName: "mace",
  age: 26,
  email: "hannah.mace93@gmail.com"
})