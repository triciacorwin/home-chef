import React from 'react';
import MyRecipeTable from './MyRecipeTable';
import SearchRecipeTable from './SearchRecipeTable'

const Main = ( { isSearchButtonClicked, result } ) => {
  // Determine the table to display between search result and my recipe
  let tableToDisplay;
  if (!isSearchButtonClicked) {
    tableToDisplay = <MyRecipeTable />;
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