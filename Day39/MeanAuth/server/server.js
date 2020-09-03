const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const DB = require("./config/db");
const PORT = 3000;
const app = express();
const api = require("./Routes/api");
const cors = require("cors");
dotenv.config({ path: "./config/config.env" });

app.use(cors());
app.use(bodyParser.json());
DB();
app.use("/api", api);
app.get("/", function (req, res) {
  res.send("helo from server");
});

app.listen(PORT, () => {
  console.log("server running on localhost:" + PORT);
});
