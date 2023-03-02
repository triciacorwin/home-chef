import React from 'react';


const RecipeCreation = () => {
  return (
    <div>
      <form>
        <div>
          <input type="submit" value="Save"></input>
        </div>
        <div>
          <label for="title">Name: </label>
          <input type="text" id="title" name="title"></input>
        </div>
        <div>
          <label for="servings">Servings: </label>
          <input type="number" id="number" name="number" min='0'></input>
        </div>
        <div>
          <label for="img">Image: </label>
          <input type="file" id="myfile" name="myfile"></input>
        </div>
        <div>
          <label for="ingredients">Ingredients: </label>
          <input type="text" id="ingredients" name="ingredients"></input>
        </div>
        <div>
          <label for="steps">Steps: </label>
          <input type="textarea" id="steps" name="steps"></input>
        </div>
      </form>
    </div>
  )
};


export default RecipeCreation;