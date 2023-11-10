const express = require("express");
const Event = require("../models/event");

const router = express.Router();

router.get("/", async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

router.post("/", async (req, res) => {
  let event = new Event({
    name: req.body.name,
    description: req.body.description,
    // Other event fields
  });
  event = await event.save();
  res.send(event);
});

module.exports = router;
