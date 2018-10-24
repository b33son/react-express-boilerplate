/*
 * File: /Users/michaelbeeson/Documents/VSCode/MERN/shopping-list/routes/api/items.js
 */

const express = require("express");
const router = express.Router();

// item model
const Item = require("../../models/item");

// @route GET api/items
// @desc Get All Items
// @access Public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) // sort descending
    .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a item
// @access Public
router.post("/", (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });
  newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Delete a item
// @access Public
router.delete("/:id", (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
