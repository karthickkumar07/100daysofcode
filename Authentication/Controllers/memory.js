const Memory = require("../Models/memory");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");
const User = require("../Models/user");
var ObjectId = require("mongodb").ObjectID;
exports.getMemoryById = async (req, res, next, id) => {
  await Memory.findById(id).exec((err, memory) => {
    if (err) {
      return res.status(400).json({
        error: "Memory not found",
      });
    }
    req.memory = memory;
    next();
  });
};

exports.createMemory = async (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;
  const { userId } = req.params;
  console.log(userId);
  const user = await User.findOne({ _id: ObjectId(userId) });
  console.log(user);

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }
    // destructuring fields
    const { event, description } = fields;

    if (!event || !description) {
      return res.status(400).json({
        error: "Please include all fields",
      });
    }

    const memory = new Memory(fields);

    /// handling files
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big!",
        });
      }
      memory.photo.data = fs.readFileSync(file.photo.path);
      memory.photo.contentType = file.photo.type;
    }
    console.log(user.email);
    memory.user = user;

    memory.save((err, memory) => {
      if (err) {
        res.status(400).json({
          error: "Saving memory in DB failed",
        });
      }
      res.json(memory);
    });
    user.memories.push(memory);
    user.save();
  });
};

exports.getAllMemory = (req, res) => {
  Memory.find().exec((err, memory) => {
    if (err) {
      return res.status(400).json({
        error: "No memory found",
      });
    }
    return res.json(memory);
  });
};
