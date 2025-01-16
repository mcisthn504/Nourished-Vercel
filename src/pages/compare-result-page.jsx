import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/compare-result.css";

import hamburgerImage from "../images/hamburger.jpg"; // Hamburger image
import pizzaImage from "../images/pizza.jpg"; // Pizza image

const CompareResultPage = () => {
  // Example data for meals
  const leftMealInfo = {
    name: "Hamburger",
    ingredients: "Bun, Patty, Lettuce, Tomato, Cheese",
    calories: 300,
    protein: 20,
    sodium: 500,
    nutrients: "Protein 20g, Carbs 30g, Fat 15g",
    macros: "Protein 25%, Carbs 50%, Fat 25%",
    history:
      "The hamburger originated in the late 19th or early 20th century, evolving from minced meat dishes popular in Hamburg, Germany.",
    image: hamburgerImage, // Use the hamburger image
  };

  const rightMealInfo = {
    name: "Pizza",
    ingredients: "Dough, Cheese, Tomato Sauce, Toppings",
    calories: 400,
    protein: 15,
    sodium: 600,
    nutrients: "Protein 15g, Carbs 40g, Fat 20g",
    macros: "Protein 20%, Carbs 60%, Fat 20%",
    history:
      "Pizza originated in Italy as a simple flatbread with toppings and became globally popular over time.",
    image: pizzaImage, // Use the pizza image
  };

  // Determine the healthier option
  const isLeftHealthier =
    leftMealInfo.calories < rightMealInfo.calories &&
    leftMealInfo.protein >= rightMealInfo.protein &&
    leftMealInfo.sodium <= rightMealInfo.sodium;

  const healthiestMeal = isLeftHealthier ? leftMealInfo : rightMealInfo;

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="compare-result-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Results</h1>
        <div className="menu-container">
          <button
            className="menu-button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <i className="material-icons">more_vert</i>
          </button>
          {isMenuOpen && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={handleReportMistake}>
                Report Mistake
              </button>
            </div>
          )}
        </div>
      </header>

      {/* Content */}
      <div className="compare-container">
        {/* Left Meal */}
        <div
          className={`meal-card ${
            isLeftHealthier ? "healthiest-option" : ""
          }`}
        >
          {isLeftHealthier && <div className="best-option-label">Best Option</div>}
          <img src={leftMealInfo.image} alt="Left Meal" className="meal-image" />
          <h2>{leftMealInfo.name}</h2>
          <div className="meal-info">
            <p><strong>Ingredients:</strong> {leftMealInfo.ingredients}</p>
            <p><strong>Calories:</strong> {leftMealInfo.calories} kcal</p>
            <p><strong>Nutrients:</strong> {leftMealInfo.nutrients}</p>
            <p><strong>Macros:</strong> {leftMealInfo.macros}</p>
            <p><strong>Sodium:</strong> {leftMealInfo.sodium}mg</p>
            <p><strong>History:</strong> {leftMealInfo.history}</p>
          </div>
        </div>

        {/* Right Meal */}
        <div
          className={`meal-card ${
            !isLeftHealthier ? "healthiest-option" : ""
          }`}
        >
          {!isLeftHealthier && <div className="best-option-label">Best Option</div>}
          <img src={rightMealInfo.image} alt="Right Meal" className="meal-image" />
          <h2>{rightMealInfo.name}</h2>
          <div className="meal-info">
            <p><strong>Ingredients:</strong> {rightMealInfo.ingredients}</p>
            <p><strong>Calories:</strong> {rightMealInfo.calories} kcal</p>
            <p><strong>Nutrients:</strong> {rightMealInfo.nutrients}</p>
            <p><strong>Macros:</strong> {rightMealInfo.macros}</p>
            <p><strong>Sodium:</strong> {rightMealInfo.sodium}mg</p>
            <p><strong>History:</strong> {rightMealInfo.history}</p>
          </div>
        </div>
      </div>

      {/* Explanation Section */}
      <div className="explanation-section">
        <h2>Why is {healthiestMeal.name} the Better Option?</h2>
        <p>
          The <strong>{healthiestMeal.name}</strong> is considered healthier because it has 
          fewer calories, higher protein content, and lower sodium levels compared to the other option. 
          These factors contribute to a more balanced nutritional profile, making it a better choice for maintaining a healthy diet.
        </p>
      </div>
    </div>
  );
};

export default CompareResultPage;

