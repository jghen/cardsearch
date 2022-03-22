import React from "react";

const SearchBox = ({searchChange}) => {
  return(
    <div className="pa2 ma2">
      <input
        className="w5 pa3 ba b--green bg-lightest-blue" 
        type="search" 
        placeholder="search name, alias or email"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;