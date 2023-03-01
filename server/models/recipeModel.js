const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
  vegatarian: {type: Boolean, default: false},
  vegan: {type: Boolean, default: false},
  glutenFree: {type: Boolean, default: false},
  dairyFree: {type: Boolean, default: false},
  preparationMinutes: {type: Number, min: 0, default: 0},
  cookingMinutes: {type: Number, min: 0, default: 0},
  servings: {type: Number, min: 1, required: true},
  title: {type: String, required: true},
  image: {type: String, default: "pexels-cats-coming-920220.jpg"},
  analyzedInstructions: [
    {steps: [
      {
      number: Number,
      step: String,
      ingredients: [
        {
          id: Number,
          name: String,
        }
      ]
      }
    ]}
  ],
  recipeID: {type: Number, default: 0}
})

module.exports = mongoose.model('Recipe', recipeSchema);