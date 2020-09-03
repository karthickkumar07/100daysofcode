const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
const User = require("../models/user");
router.get("/", (req, res) => {
  res.send("From API route");
});

router.post("/register", (req, res) => {
  let userData = req.body;
  const user = new User(userData);
  user.save((err, userDetails) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    }
    let payload = { subject: userDetails._id };
    let token = jwt.sign(payload, "secretKey");
    res.status(200).send({
      token,
    });
  });
});

router.post("/login", (req, res) => {
  const userData = req.body;
  User.findOne({ email: userData.email }, (err, user) => {
    if (err) {
      res.status(400).json({
        error: err,
      });
    } else {
      if (!user) {
        res.status(401).send("Invalid email");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid password");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secretKey");

          res.status(200).send({ token });
        }
      }
    }
  });
});

function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    return res.status(401).send("unauthorized request");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("unauthorized request");
  }
  let payload = jwt.verify(token, "secretKey");
  if (!payload) {
    return res.status(401).send("unauthorized request");
  }
  req.userId = payload.subject;
  next();
}

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "2",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "3",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "4",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "5",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "6",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "7",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
  ];
  res.json(events);
});

router.get("/special", verifyToken, (req, res) => {
  let events = [
    {
      _id: "1",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "2",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "3",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "4",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "5",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "6",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
    {
      _id: "7",
      name: "spart",
      description: " testing this event",
      date: "20-11-2020",
    },
  ];
  res.json(events);
});

module.exports = router;
