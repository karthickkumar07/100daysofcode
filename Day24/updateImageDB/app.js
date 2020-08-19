require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();

//routes
const memoryRoutes = require("./routes/memory");

// middleware
const bodyParser = require("body-parser");
const cors = require("cors");

//Db connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });
app.use(bodyParser.json());
app.use(cors());

//routes
app.use("/api", memoryRoutes);

/// port
const port = process.env.PORT || 8001;
////starting a server
app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
