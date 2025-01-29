import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import tacoImage from "../images/tacosImage.png"; // Add the path to your taco image

const TacoVeganPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the taco is marked as favorite
  const isFavorite = favorites.includes("vegan taco");

  const handleFavoriteClick = () => {
    toggleFavorite("vegan taco"); // Toggle the favorite status for "vegan taco"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="food-info-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Information</h1>
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={handleFavoriteClick}
        >
          <i className="material-icons">
            {isFavorite ? "favorite" : "favorite_border"}
          </i>
        </button>
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
      <div className="content">
      <p className="food-category">VEGAN</p>
        <div className="food-container">
          <img src={tacoImage} alt="Vegan Taco" className="food-image" />
          <h2 className="food-name">Vegan Taco</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Tortilla, Plant-Based Meat, Vegan Cheese, Lettuce, Tomato</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>180 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 25g, Fat 8g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 25%, Carbs 55%, Fat 20%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>250mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The vegan taco is a modern twist on the traditional Mexican dish,
              replacing meat and dairy with plant-based alternatives to create a
              dish that is both sustainable and delicious.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TacoVeganPage;
