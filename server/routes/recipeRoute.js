const express = require('express');
const router = express.Router();
const path = require('path');
const Recipe = require(path.join(__dirname, '../models/recipeModel'));


// create a recipe
router.post ("/", async (req, res, next) => {
  try {
    const {vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions} = req.body;
    const newRecipe = await Recipe.create({vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions});
    res.status(200).json(newRecipe);
  } catch (err) {
    next ({
      log: 'Express error handler caught error in recipeRoute.post',
      message: {err: err.message}
    });
  }
})


// get a recipe
router.get ("/:id", async (req, res, next) => {
  try {
    const myRecipe = await Recipe.find({_id: req.params.id});
    if (myRecipe.length === 0) {
      return next(
        {
          log: 'No recipe found',
          message: {err: 'No recipe found'}
        }
      )
    }
    res.status(200).json(myRecipe[0]);
  } catch (err) {
    next ({
      log: 'Express error handler caught error in recipeRoute.get(a recipe)',
      message: {err: err.message}
    });
  }
})


// patch a recipe
router.patch ("/:id", async (req, res, next) => {
  try {
    const updatedRecipe = await Recipe.findOneAndUpdate({_id: req.params.id}, { $set: req.body }, {returnOriginal: false});
    if (!updatedRecipe) {
      return next(
        {
          log: 'No recipe found',
          message: {err: 'No recipe found'}
        }
      )
    }
    res.status(200).json(updatedRecipe);
  } catch (err) {
    next ({
      log: 'Express error handler caught error in recipeRoute.patch)',
      message: {err: err.message}
    });
  }
})


// delete a recipe
router.delete ("/:id", async (req, res, next) => {
  try {
    const deletedRecipe = await Recipe.findOneAndDelete({_id: req.params.id});
    if (!deletedRecipe) {
      return next(
        {
          log: 'No recipe found',
          message: {err: 'No recipe found'}
        }
      )
    };
    res.status(200).json(deletedRecipe);
  } catch (err) {
    next ({
      log: 'Express error handler caught error in recipeRoute.delete)',
      message: {err: err.message}
    });
  }
})


module.exports = router;