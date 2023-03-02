import React from 'react';
import MyRecipeTable from './MyRecipeTable';
import SearchRecipeTable from './SearchRecipeTable'

const Main = ( { isSearchButtonClicked } ) => {

  let tableToDisplay;
  if (!isSearchButtonClicked) {
    tableToDisplay = <MyRecipeTable />;
  } else {
    tableToDisplay =   <SearchRecipeTable />;
  }
  return (
    <>
      {tableToDisplay}
    </>
  )
}

export default Main;