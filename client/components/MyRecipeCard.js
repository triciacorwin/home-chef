import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className = "recipeCard">
      <div className = "cardTitle">
        <h3>{recipe.title}</h3>
        <a href="">View Recipe</a>
      </div>
      <img src={recipe.image} alt="recipe image"></img>
      <div className = "cardButtons">
        <button id = {recipe._id}>Edit</button>
        <button id = {recipe._id}>Delete</button>
      </div>
    </div>
  )
}

export default RecipeCard;