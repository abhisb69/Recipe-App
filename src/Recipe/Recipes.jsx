import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../Search/Search";
import "./Recipes.css";
import RecipeCard from "../Recipe-Card/RecipeCard";
import useRecipeData from "../hooks/useRecipeData";

function Recipes({ recipename }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [meals, setMeals] = useRecipeData("n");

  return (
    <div className="Recipe">
      <div className="recipe-card">
        <ul className="RecipeCard">
          {meals.map((meal) => (
            <div key={meal.idMeal}>
              <RecipeCard
                image={meal.strMealThumb}
                name={meal.strMeal}
                id={meal.idMeal}
              />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Recipes;
