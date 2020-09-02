const pool = require("./db");

const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM person");
    res.status(200).json(response.rows);
  } catch (err) {
    console.log(err);
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    var response = await pool.query(
      `INSERT INTO person (email,password) VALUES ('${email}', '${password}')`
    );
    res.status(200).json({
      message: "successfullyt added",
    });
    console.log(response.rows);
  } catch (err) {
    console.log(err);
  }
};

const login = async (request, response) => {
  try {
    const { email, password } = request.body;
    var response = await pool.query(
      `SELECT * FROM person where email='${email}'  and password ='${password}'`
    );
    if (response.row > 0) {
      response.status(200).json({
        message: "success login",
      });
    } else {
      response.status(400).json({
        message: "login failed",
      });
    }
    console.log(response.rows);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getUsers,
  createUser,
  login,
};
