import React, { useState, useCallback } from 'react';
import { FaBeer } from 'react-icons/fa';
// import logo from 'assets/images/logo.jpg';
import Main from './Main.js';


// Parent component

const Header = () => {
  const [isSearchButtonClicked, setSearchButton] = useState(false);

  // make wrapper function to give child component setSearchButton function
  const setSearchButtonWrapper = useCallback(val => {
    setSearchButton(val);
  }, [setSearchButton])

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src='../assets/images/logo.jpg' alt='Home Chef' />
        </div>
        <div className="search">
          <SearchBar setSearchButton = {setSearchButtonWrapper}/>
        </div>
        <div className="buttons">
          <CreateRecipeButton />
          <MyRecipeButton setSearchButton = {setSearchButtonWrapper}/>
          <SignupLoginButton />
          <LanguageSelector />
        </div>
      </div>
      <div className="main">
        <Main isSearchButtonClicked = {isSearchButtonClicked}/>
      </div>
    </>
  )
}

// Child components

const SearchBar = ( {setSearchButton} ) => {
  // const [searchTerm, setSearchTerm] = React.useState("");
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setSearchTerm(event.target.value);
  // };

  return (
    <>
      <form>
        <input className="searchbar" type="search" name="q" placeholder="Search recipes..." />
        <input type="submit" value="Search" />
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

const MyRecipeButton = ( {setSearchButton} ) => {
  return (
    <button>
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