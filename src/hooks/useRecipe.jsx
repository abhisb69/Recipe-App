import axios from "axios";
import React, { useEffect, useState } from "react";

function useRecipe(id, recipename) {
  const [steps, setSteps] = useState("");
  const [recipeDetails, setRecipeDetals] = useState({});
  const [requriments, setRequriments] = useState([]);
  const [mesurment, setmesurment] = useState([]);
  const mesurmentObj = [];
  const ingredientsObj = [];
  const fetchDetails = async () => {
    let response;
    try {
      if (recipename) {
        response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipename}`
        );
      } else {
        response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
      }

      const details = response.data.meals[0];
      console.log(details.strInstructions);

      setRecipeDetals((state) => ({
        ...state,
        name: details.strMeal,
        country: details.strArea,
        image: details.strMealThumb,
        category: details.strCategory,
        instructions: details.strInstructions,
      }));
      // setID(details.strInstructions);
      setSteps(
        details.strInstructions.split(".").filter((step) => step.trim() !== "")
      );
      for (let i = 1; i <= 52; i++) {
        if (
          details[`strIngredient${i}`] != null ||
          details[`strIngredient${i}`] != ""
        ) {
          let item = details[`strIngredient${i}`];
          if (item && item.trim() !== "") {
            ingredientsObj.push(item);
          }
        }
      }
      for (let i = 1; i <= 53; i++) {
        if (
          details[`strMeasure${i}`] != null ||
          details[`strMeasure${i}`] != ""
        ) {
          let measure = details[`strMeasure${i}`];
          if (measure && measure.trim() !== "") {
            mesurmentObj.push(measure);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
    setRequriments(ingredientsObj);
    setmesurment(mesurmentObj);
  };
  console.log(steps);

  useEffect(() => {
    fetchDetails();
  }, []);
  return [
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
  ];
}

export default useRecipe;
