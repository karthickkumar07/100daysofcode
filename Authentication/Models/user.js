var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: 32,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  memories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Memory",
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
