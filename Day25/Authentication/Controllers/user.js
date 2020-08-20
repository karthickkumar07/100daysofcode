const User = require("../Models/user");
const bcrypt = require("bcrypt");

exports.signUp = (req, res) => {
  const user = new User(req.body);
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) {
      console.lof(err);
    } else {
      user.password = hash;
      user.save((err, info) => {
        if (err) {
          return res.status(400).json({
            error: "Not able to store user in DB",
          });
        }
        res.json(info);
      });
    }
  });
};
