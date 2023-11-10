const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Add other fields as needed
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
