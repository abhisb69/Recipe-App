import React, { useState } from "react";
import "./Search.css";
import useDebounce from "../hooks/useDebounce";

function Search({ updateSearch }) {
  const deBounceCB = useDebounce((e) => updateSearch(e.target.value));
  return (
    <div className="searchbar">
      <h1>Flavors to Savor</h1>
      <input
        type="text"
        name=""
        id=""
        className="search-bar "
        placeholder="Search..."
        onChange={deBounceCB}
      />
    </div>
  );
}

export default Search;
