const express = require('express');
const router = express.Router();


// create a recipe
router.post ("/", (req, res) => {
  res.status(200).json("Create a new recipe");
})

// get all recipes
router.get ("/", (req, res) => {
  res.status(200).json("View all recipes");
})


// get a recipe
router.get ("/:id", (req, res) => {
  res.status(200).json("View a recipe");
})


// patch a recipe
router.patch ("/:id", (req, res) => {
  res.status(200).json("Edit a recipe");
})


// delete a recipe
router.delete ("/:id", (req, res) => {
  res.status(200).json("delete a recipe");
})


module.exports = router;