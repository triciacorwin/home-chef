const recipeController = {};
const path = require('path');
const Recipe = require(path.join(__dirname, '../models/recipeModel'));

recipeController.createRecipe = async (req, res, next) => {
  try {
    const {vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions} = req.body;
    res.locals.newRecipe = await Recipe.create({vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions});
    return next();
  } catch (err) {
    next ({
      log: 'Express error handler caught error in recipeController.createRecipe',
      message: {err: err.message}
    });
  }
}


// module.exports = recipeController;