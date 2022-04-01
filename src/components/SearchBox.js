import React from "react";
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
  return(
    <div>
      <input
        className="w5 pa3 ba br2 shadow-1" 
        type="search" 
        placeholder="search name, alias or email"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;