import React from "react";
import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ image, name, id }) {
  return (
    <div className="recipe-wrapper" key={id}>
      <div className="recipe-image">
        <img src={image} alt="Recipe" className="recipe-image" />
      </div>
      <div className="recipe-name">
        <h2>{name}</h2>
      </div>
      <Link to={`/Details/${id}`}>
        <button className="get">Get Recipe</button>
      </Link>
    </div>
  );
}

export default RecipeCard;
