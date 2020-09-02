const express = require("express");

const app = express();
const user = require("./controllers/user");
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/users", user.getUsers);
app.post("/adduser", user.createUser);
app.post("/login", user.login);

app.listen(3000, () => {
  console.log("server is running");
});
