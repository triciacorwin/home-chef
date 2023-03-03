import React from 'react';

const RecipeCard = ({ recipe, setMyRecipeList }) => {

  const handleDelete = (event) => {
    console.log(event.target.id);
    fetch(`/api/user/myrecipe/${event.target.id}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Data Deleted:', data);
        const fetchMyRecipes = async () => {
          // fetch makes HTTP request in React to GET data to the server's endpoint passed in 
          const response = await fetch('/api/user/myrecipe');
          const data = await response.json();
          if (response.ok) {
            setMyRecipeList(data);
          }
        }
        fetchMyRecipes();
      })
      .catch(error => {
        console.error(error);
      })
  }



  return (
    <div className = "recipeCard">
      <div className = "cardTitle">
        <h3>{recipe.title}</h3>
        <a href="">View Recipe</a>
      </div>
      <img src={recipe.image} alt="recipe image"></img>
      <div className = "cardButtons">
        <button id = {recipe._id}>Edit</button>
        <button onClick = {handleDelete} id = {recipe._id}>Delete</button>
      </div>
    </div>
  )
}

export default RecipeCard;