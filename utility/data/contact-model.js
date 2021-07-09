const mongoose = require("mongoose");

const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var ContactModelSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Please provide your great Name!"],
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "So how could we get in touch with you?!"],
  },
  subject: { type: String, lowercase: true, trim: true },
  message: {
    type: String,
    lowercase: true,
    trim: true,
    required: [true, "Is is awesome to hear from you!!!"],
  },
});

module.exports =
  mongoose.models.Contact || mongoose.model("Contact", ContactModelSchema);
