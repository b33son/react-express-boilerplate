/*
 * File: /Users/michaelbeeson/Documents/VSCode/MERN/shopping-list/server.js
 */

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

const app = express();

// bodyparser middleware
app.use(bodyParser.json());

const db = require("./config/keys").mongoUri;

// connect to mongo using mongoose
mongoose
  .connect(db)
  .then(() => console.log("MongoDb connected..."))
  .catch(err => console.log("error: ", err));

// Use routes
app.use("/api/items", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}.`));
