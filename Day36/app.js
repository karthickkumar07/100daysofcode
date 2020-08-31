const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json()); // req.body

// Routes

// get all test
app.get("/tests", async (req, res) => {
  try {
    const test = await pool.query("SELECT * FROM test");
    res.json(test.rows);
  } catch (error) {
    console.log(error);
  }
});

// get a test
app.get(`/test/:id`, async (req, res) => {
  try {
    const test = await pool.query(
      `SELECT * FROM test where id=${req.params.id}`
    );
    res.json(test.rows);
  } catch (error) {
    console.log(error);
  }
});

// create a test
app.post("/addtest", async (req, res) => {
  try {
    // console.log(req.body);
    const { description } = req.body;
    const newTest = await pool.query(
      "INSERT INTO test (description)  VALUES ($1) RETURNING *",
      [description]
    );
    res.json(newTest.rows);
  } catch (error) {
    console.log(error.message);
  }
});

// update a test
app.put("/test/:id", (req, res) => {
  try {
    const { description } = req.body;
    const updatedTest = pool.query(
      "UPDATE test SET description=$1 WHERE id=$2 ",
      [description, req.params.id]
    );
    res.json(updatedTest);
  } catch (error) {
    console.log(error.message);
  }
});

// delete a test
app.delete(`/test/:id`, async (req, res) => {
  try {
    const test = await pool.query(
      `delete  FROM test where id=${req.params.id}`
    );
    res.json("Deleted Successfully");
  } catch (error) {
    console.log(error);
  }
});

// server
app.listen(3000, () => {
  console.log("server is running");
});
