import React, { useState } from "react";
import Search from "../Search/Search";
import Recipes from "../Recipe/Recipes";
import RecipeDetails from "../RecipeDetails/RecipeDetails";

function mainApp(props) {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Search updateSearch={setSearch} />
      {search != 0 ? <RecipeDetails recipename={search} /> : <Recipes />}
    </div>
  );
}

export default mainApp;
