const express = require("express");
const EventsController = require("./controllers/EventsController");

const app = express();
const port = 3001;
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
mongoose
  .connect(
    "mongodb+srv://sjarmale:sjarmale@cluster0.qgcoubu.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

app.use(cors());
app.use(express.json());
app.use("/api/events", EventsController);
app.use("/api/auth", require("./controllers/AuthController"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
