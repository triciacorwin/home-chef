import React, {useState} from 'react';
import MyRecipeTable from './MyRecipeTable';
import SearchRecipeTable from './SearchRecipeTable'

const Main = ( { isSearchButtonClicked, result, sourceLang, targetLang, setSourceLang, setTargetLang, notSelectedLang } ) => {
  // Determine the table to display between search result and my recipe
  let tableToDisplay;
  if (!isSearchButtonClicked) {
    tableToDisplay = <MyRecipeTable sourceLang = {sourceLang} targetLang = {targetLang} setSourceLang = {setSourceLang} setTargetLang = {setTargetLang} notSelectedLang = {notSelectedLang}/>;
  } else {
    tableToDisplay = <SearchRecipeTable result = {result}/>;
  }
  return (
    <>
      {tableToDisplay}
    </>
  )
}

export default Main;