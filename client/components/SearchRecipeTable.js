import React from 'react';

const SearchRecipeTable = ({ result }) => {
  return (
    <div className="recipeList">
      <h2>What other home chefs created...</h2>
      <div className="recipeTable">
        {result && result.map((recipe) => (
          <RecipeCard key= {recipe.id} recipe = {recipe}/>
        ))}
      </div>
    </div>
  )
}

const RecipeCard = ( {recipe} ) => {
  return (
    <div className = "recipeCard">
      <div className = "cardTitle">
        <h3>{recipe.title}</h3>
        <a href="">See full recipe</a>
      </div>
      <div className = "cardButtons">
        <img src={recipe.image} alt="recipe image"></img>
      </div>
      <button className = "cardButtons">Save</button>
    </div>
  )
}

export default SearchRecipeTable;
