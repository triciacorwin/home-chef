import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div>
      <h3>{recipe.title}</h3>
      <a href="">See full recipe</a>
      <img src={recipe.image} alt="recipe image"></img>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default RecipeCard;