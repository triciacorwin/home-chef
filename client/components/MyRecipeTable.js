import React from 'react';

const MyRecipeTable = () => {
  return (
    <div>
      <h2>My Recipes</h2>
      <RecipeCard />
    </div>
  )
}

const RecipeCard = () => {
  return (
    <div>
      <h3>Example Title</h3>
      <a href="">See full recipe</a>
      <img src="" alt=""></img>
      <button>Edit</button>
      <button>Delete</button>
    </div>
  )
}

export default MyRecipeTable;