import React, { useState, useEffect } from 'react';
// import logo from 'assets/images/logo.jpg';
import Main from './Main.js';


// Parent component

const Header = () => {
  // Switch between result result table and my table
  const [isSearchButtonClicked, setSearchButton] = useState(true);
  // Search query and return search result
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src='../assets/images/logo.jpg' alt='Home Chef' />
        </div>
        <div className="search">
          <SearchBar isSearchButtonClicked = {isSearchButtonClicked} setSearchButton = {setSearchButton} query = {query} setQuery = {setQuery} setResult = {setResult}/>
        </div>
        <div className="buttons">
          <CreateRecipeButton />
          <MyRecipeButton isSearchButtonClicked = {isSearchButtonClicked} setSearchButton = {setSearchButton}/>
          <SignupLoginButton />
          <LanguageSelector />
        </div>
      </div>
      <div className="main">
        <Main isSearchButtonClicked = {isSearchButtonClicked} result = {result}/>
      </div>
    </>
  )
}

// Child components

const SearchBar = ( {isSearchButtonClicked, setSearchButton, query, setQuery, setResult} ) => {
 

  useEffect(() => {
    if (query !== '') {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'f3b2dab3femsh91daa10d4e6d682p12a087jsnbb406490405a',
          'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
        }
      };
      fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch?query=${query}&cuisine=italian&excludeCuisine=greek&diet=vegetarian&intolerances=gluten&equipment=pan&includeIngredients=tomato%2Ccheese&excludeIngredients=eggs&type=main%20course&instructionsRequired=true&fillIngredients=false&addRecipeInformation=false&titleMatch=Crock%20Pot&maxReadyTime=20&ignorePantry=true&sort=calories&sortDirection=asc&minCarbs=10&maxCarbs=100&minProtein=10&maxProtein=100&minCalories=50&maxCalories=800&minFat=10&maxFat=100&minAlcohol=0&maxAlcohol=100&minCaffeine=0&maxCaffeine=100&minCopper=0&maxCopper=100&minCalcium=0&maxCalcium=100&minCholine=0&maxCholine=100&minCholesterol=0&maxCholesterol=100&minFluoride=0&maxFluoride=100&minSaturatedFat=0&maxSaturatedFat=100&minVitaminA=0&maxVitaminA=100&minVitaminC=0&maxVitaminC=100&minVitaminD=0&maxVitaminD=100&minVitaminE=0&maxVitaminE=100&minVitaminK=0&maxVitaminK=100&minVitaminB1=0&maxVitaminB1=100&minVitaminB2=0&maxVitaminB2=100&minVitaminB5=0&maxVitaminB5=100&minVitaminB3=0&maxVitaminB3=100&minVitaminB6=0&maxVitaminB6=100&minVitaminB12=0&maxVitaminB12=100&minFiber=0&maxFiber=100&minFolate=0&maxFolate=100&minFolicAcid=0&maxFolicAcid=100&minIodine=0&maxIodine=100&minIron=0&maxIron=100&minMagnesium=0&maxMagnesium=100&minManganese=0&maxManganese=100&minPhosphorus=0&maxPhosphorus=100&minPotassium=0&maxPotassium=100&minSelenium=0&maxSelenium=100&minSodium=0&maxSodium=100&minSugar=0&maxSugar=100&minZinc=0&maxZinc=100&offset=0&number=10&limitLicense=false&ranking=2`, options)
        .then(response => response.json())
        .then(data => {
          setResult(data.results)
          return;
        })
        .catch(err => {
          console.error(err);
          res.status(400).json({err: err.message});
        });
    }
  })

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleButtonChange = () => {
    if (isSearchButtonClicked === false) {
      setSearchButton(true);
    }
  }

  // console.log('test', result);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input className="searchbar" type="search" name="query" value={query} onChange={handleChange} placeholder="Search recipes..." />
        <button onClick={handleButtonChange}>
          Search
        </button>
      </form>
    </>
  )
}


const CreateRecipeButton = () => {
  return (
    <button>
      Create recipe
    </button>
  )
}

const MyRecipeButton = ( {isSearchButtonClicked, setSearchButton} ) => {
  const handleChange = () => {
    if (isSearchButtonClicked === true) {
      setSearchButton(false);
    }
  }

  return (
    <button onClick={handleChange}>
      My recipes
    </button>
  )
}

const SignupLoginButton = () => {
  return (
    <button>
      Signup / Login
    </button>
  )
}

const LanguageSelector = () => {
  return (
    <select name="language" id="language">
      <option value="English">English</option>
      <option value="Japanese">日本語</option>
    </select>
  )
}


export default Header;