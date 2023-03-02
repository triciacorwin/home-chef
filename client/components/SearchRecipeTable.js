import React from 'react';

const SearchRecipeTable = () => {
  return (
    <div>
      <h2>Search Result</h2>
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
      <button>Save</button>
    </div>
  )
}

export default SearchRecipeTable;
