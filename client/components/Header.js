import React from 'react';
// import logo from 'assets/images/logo.jpg';

const Header = () => {
  return (
    <>
      <div>
        <img src='' alt='Home Chef' />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        <CreateRecipeButton />
        <MyRecipeButton />
        <SignupLoginButton />
        <LanguageSelector />
      </div>
    </>
  )
}

const SearchBar = () => {

  return (
    <>
      <form>
        <input type="text" placeholder="Search recipes..." />
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

const MyRecipeButton = () => {
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