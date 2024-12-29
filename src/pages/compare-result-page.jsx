import React from "react";
import { usePhotoContext } from "../contexts/photoContext"; // Import the context
import "../styles/compare-result.css";


const CompareResultPage = () => {
  const { leftPhoto, rightPhoto } = usePhotoContext(); // Use the photo context

  // Example static data for meals; replace with actual data
  const leftMealInfo = {
    name: "Hamburger",
    ingredients: "Bun, Patty, Lettuce, Tomato, Cheese",
    calories: "300 kcal",
    nutrients: "Protein 20g, Carbs 30g, Fat 15g",
    macros: "Protein 25%, Carbs 50%, Fat 25%",
    sodium: "500mg",
    history:
      "The hamburger originated in the late 19th or early 20th century, evolving from minced meat dishes popular in Hamburg, Germany.",
  };

  const rightMealInfo = {
    name: "Pizza",
    ingredients: "Dough, Cheese, Tomato Sauce, Toppings",
    calories: "400 kcal",
    nutrients: "Protein 15g, Carbs 40g, Fat 20g",
    macros: "Protein 20%, Carbs 60%, Fat 20%",
    sodium: "600mg",
    history:
      "Pizza originated in Italy as a simple flatbread with toppings and became globally popular over time.",
  };

  return (
    <div className="compare-result-page">
      {/* Header */}
      <header className="header">
        <h1>Compare Meals</h1>
      </header>

      {/* Content */}
      <div className="compare-container">
        {/* Left Meal */}
        <div className="meal-card">
          <img src={leftPhoto} alt="Left Meal" className="meal-image" />
          <h2>{leftMealInfo.name}</h2>
          <div className="meal-info">
            <p><strong>Ingredients:</strong> {leftMealInfo.ingredients}</p>
            <p><strong>Calories:</strong> {leftMealInfo.calories}</p>
            <p><strong>Nutrients:</strong> {leftMealInfo.nutrients}</p>
            <p><strong>Macros:</strong> {leftMealInfo.macros}</p>
            <p><strong>Sodium:</strong> {leftMealInfo.sodium}</p>
            <p><strong>History:</strong> {leftMealInfo.history}</p>
          </div>
        </div>

        {/* Right Meal */}
        <div className="meal-card">
          <img src={rightPhoto} alt="Right Meal" className="meal-image" />
          <h2>{rightMealInfo.name}</h2>
          <div className="meal-info">
            <p><strong>Ingredients:</strong> {rightMealInfo.ingredients}</p>
            <p><strong>Calories:</strong> {rightMealInfo.calories}</p>
            <p><strong>Nutrients:</strong> {rightMealInfo.nutrients}</p>
            <p><strong>Macros:</strong> {rightMealInfo.macros}</p>
            <p><strong>Sodium:</strong> {rightMealInfo.sodium}</p>
            <p><strong>History:</strong> {rightMealInfo.history}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareResultPage;
