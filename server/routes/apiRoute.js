const express = require('express');
const router = express.Router();
const path = require('path');
const Recipe = require(path.join(__dirname, '../models/recipeModel'));

// search recipes
// get all searched recipe
router.get(("/recipe"), (req, res) => {
  //const paramValue = req.query;
  const testValue = 'pasta';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f3b2dab3femsh91daa10d4e6d682p12a087jsnbb406490405a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${testValue}&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2`, options)
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(err => {
      console.error(err);
      res.status(400).json({err: err.message});
    });
})

// get recipe detail information
router.get(("/recipe/:id"), (req, res) => {
  //const paramValue = req.params.id
  const testValue = 479101;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f3b2dab3femsh91daa10d4e6d682p12a087jsnbb406490405a',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${testValue}/information`, options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.error(err);
      res.status(400).json({err: err.message});
    });
})

// save a recipe // create a recipe in my recipe
router.post("/recipe/:id", async (req, res, next) => {
  try {
    const {vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions} = req.params.id;
    const newRecipe = await Recipe.create({vegetarian, vegan, glutenFree, dairyFree, preparationMinutes, cookingMinutes, servings, title, image, analyzedInstructions});
    res.status(200).json(newRecipe);
  } catch (err) {
    next ({
      log: 'Express error handler caught error in apiRoute.post',
      message: {err: err.message}
    });
  }
})


module.exports = router;