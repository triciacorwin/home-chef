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

recipeController.getRecipe = (req, res, next) => {
    const paramValue = req.params.id;
    // const testValue = 479101;
    console.log(paramValue);
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'f3b2dab3femsh91daa10d4e6d682p12a087jsnbb406490405a',
        'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
      }
    };
    fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${paramValue}/information`, options)
      .then(response => response.json())
      .then(response => {
        res.locals.newRecipe = response;
        return next();
      })
      .catch(err => {
        console.error('Express error handler caught error in recipeController.getRecipe');
        res.status(400).json({err: err.message});
      });
}


module.exports = recipeController;