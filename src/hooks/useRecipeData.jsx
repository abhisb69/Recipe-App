import axios from "axios";
import React, { useEffect, useState } from "react";

function useRecipeData({ recipename }) {
  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    let response;
    try {
      response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const tenMeals = response.data.meals.slice(0, 12);
      setMeals(tenMeals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    }
  };
  useEffect(() => {
    fetchMeals();
    console.log(meals);
  }, []);

  return [meals, setMeals];
}

export default useRecipeData;
