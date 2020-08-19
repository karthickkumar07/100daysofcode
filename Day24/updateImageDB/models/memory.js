const mongoose = require("mongoose");

const memorySchema = new mongoose.Schema(
  {
    event: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
    },
    description: {
      type: String,
      trim: true,
      required: true,
      maxlength: 2000,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Memory", memorySchema);
