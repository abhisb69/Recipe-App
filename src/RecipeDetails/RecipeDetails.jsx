import React from "react";
import { Link, useParams } from "react-router-dom";
import "./RecipeDetails.css";
import useRecipe from "../hooks/useRecipe";

function RecipeDetails({ recipename }) {
  const { id } = useParams();
  const [
    steps,
    setSteps,
    recipeDetails,
    setRecipeDetals,
    requriments,
    setRequriments,
    mesurment,
    setmesurment,
    mesurmentObj,
    ingredientsObj,
  ] = useRecipe(id, recipename);
  return (
    <div className="main">
      <h1 className="Recipe-name">{recipeDetails.name}</h1>
      <img src={recipeDetails.image} alt="" className="Recipe-image" />
      <div className="cont">
        <p className="contry">Country : {recipeDetails.country}</p>
        <p className="contry">Category : {recipeDetails.category}</p>
      </div>
      <div className="req">
        <ul>
          <p className="heads">Requriments</p>
          <p>
            {requriments.map((i, id) => (
              <li key={id}>{i} -</li>
            ))}
          </p>
        </ul>
        <ul>
          <p className="heads">Measurment</p>
          <p>
            {mesurment.map((i, id) => (
              <li key={id}>{i}</li>
            ))}
          </p>
        </ul>
      </div>
      <div className="steps">
        <h2 className="fff">Recipe</h2>
        <p className="para">{steps}</p>
      </div>
    </div>
  );
}

export default RecipeDetails;
