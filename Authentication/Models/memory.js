const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

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
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Memory", memorySchema);
