const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv").config();

// middlewars
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");

//passport config
require("./Controllers/Passport")(passport);

//DB connection
//Db connection
mongoose
  .connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

//middlewars
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

//routes
const userRoutes = require("./Routes/user");

// api routes
app.use("/api", userRoutes);

/// port
const port = process.env.PORT || 8000;
////starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
