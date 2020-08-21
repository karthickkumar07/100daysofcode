const express = require("express");
const { signUp } = require("../Controllers/user");
const router = express.Router();
const passport = require("passport");
router.post("/signup", signUp);

router.post(
  "/signin",
  passport.authenticate("local", { failureRedirect: "/signin" }),
  (req, res) => {
    res.json({
      message: "successfully logged in",
    });
  }
);

module.exports = router;
