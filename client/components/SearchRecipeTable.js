import React from 'react';

const SearchRecipeTable = ({ result }) => {
  return (
    <div className="recipeList">
      <h2>What other home chefs created...</h2>
      <div className="recipeTable">
        {result && result.map((recipe) => (
          <RecipeCard key = {recipe.id} recipe = {recipe}/>
        ))}
      </div>
    </div>
  )
}

const RecipeCard = ({ recipe }) => {

  const handleButtonClick = (event) => {
    // console.log(event.target.id);
    fetch(`/api/recipe/${event.target.id}`, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify.data
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success', data);
        return;
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({err: err.message});
      })
  }

  return (
    <div className = "recipeCard">
      <div className = "cardTitle">
        <h3>{recipe.title}</h3>
        <a href="">See full recipe</a>
      </div>
      <div className = "cardButtons">
        <img src={recipe.image} alt="recipe image"></img>
      </div>
      <button onClick={handleButtonClick} className = "cardButtons" id = {recipe.id}>Save</button>
    </div>
  )
}

export default SearchRecipeTable;
