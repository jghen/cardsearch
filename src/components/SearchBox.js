import React from "react";

const SearchBox = ({searchChange}) => {
  return(
    <div>
      <input
        className="w5 pa3 ba shadow-4" 
        type="search" 
        placeholder="search name, alias or email"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;