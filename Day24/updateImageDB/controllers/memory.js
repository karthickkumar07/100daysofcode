const Memory = require("../models/memory");
const formidable = require("formidable");
const _ = require("lodash");
const fs = require("fs");

exports.getMemoryById = (req, res, next, id) => {
  Memory.findById(id).exec((err, memory) => {
    if (err) {
      return res.status(400).json({
        error: "Memory not found",
      });
    }
    req.memory = memory;
    next();
  });
};

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

exports.updateMemory = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "problem with image",
      });
    }

    //updation code
    let memory = req.memory;
    memory = _.extend(memory, fields);
    console.log(memory);
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
          error: "updating memory in DB failed",
        });
      }
      res.json(memory);
    });
  });
};
