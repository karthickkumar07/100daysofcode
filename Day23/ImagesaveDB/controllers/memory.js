const Memory = require("../models/memory");
const formidable = require("formidable");
const fs = require("fs");

exports.createMemory = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true; //TODO:

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

    let memory = new Memory(fields);

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

    memory.save((err, memory) => {
      if (err) {
        res.status(400).json({
          error: "Saving memory in DB failed",
        });
      }
      res.json(memory);
    });
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
