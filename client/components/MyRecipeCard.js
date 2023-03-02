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
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}

export default RecipeCard;