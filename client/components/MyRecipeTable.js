import React, { useEffect, useState } from 'react';
import RecipeCard from './MyRecipeCard'

const MyRecipeTable = ( {sourceLang, targetLang, setSourceLang, setTargetLang, notSelectedLang} ) => {
  // add a property to state and a function to manipulate the state //set initial value to state property
  const [myRecipeList, setMyRecipeList] = useState(null); 

  // useEffect hook fires the function when component is rendered, fetch my recipes from backend 
  useEffect(() => {
    const fetchMyRecipes = async () => {
      // fetch makes HTTP request in React to GET data to the server's endpoint passed in 
      const response = await fetch('/api/user/myrecipe');
      const data = await response.json();
      if (response.ok) {
        setMyRecipeList(data);
      }
    }
    fetchMyRecipes();
  }, []);



  // grab data wanted and then pass it fetche

  return (
    <div className="recipeList">
      <h2>My Recipes</h2>
      <div className="recipeTable">
        {myRecipeList && myRecipeList.map((recipe) => (
          <RecipeCard setMyRecipeList={setMyRecipeList} key={recipe._id} recipe = {recipe}/>
        ))}
      </div>
    </div>
  )
}

export default MyRecipeTable;