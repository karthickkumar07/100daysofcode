import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";
dotenv.config();
const app = express();

connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/products", productRoutes);

const port = process.env.PORT || 5000;
app.listen(
  port,
  console.log(
    `Server running in ${process.env.NODE_ENV} on port ${port}`.red.bold
  )
);
