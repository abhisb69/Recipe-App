import React from "react";
import { Route, Routes } from "react-router-dom";
import RecipeDetails from "../RecipeDetails/RecipeDetails";
import MainApp from "../mainApp/mainApp";

function CoustomRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainApp />} />
      <Route path="/Details/:id" element={<RecipeDetails />} />
    </Routes>
  );
}

export default CoustomRoutes;
