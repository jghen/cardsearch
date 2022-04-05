import React from "react";
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
  return(
    <div>
      <input
        className="pa3 ba br2" 
        type="search" 
        placeholder="search name, alias or email"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;