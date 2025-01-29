import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import grilledChickenImage from "../images/mains1.jpg"; // Add the correct path to your grilled chicken image

const GrilledChickenPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if grilled chicken is marked as a favorite
  const isFavorite = favorites.includes("grilled chicken");

  const handleFavoriteClick = () => {
    toggleFavorite("grilled chicken"); // Toggle the favorite status for "grilled chicken"
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
        <div className="food-container">
          <img
            src={grilledChickenImage}
            alt="Grilled Chicken"
            className="food-image"
          />
          <h2 className="food-name">Grilled Chicken</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Chicken Breast, Olive Oil, Garlic, Lemon, Spices</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>220 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 30g, Carbs 0g, Fat 10g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 60%, Carbs 0%, Fat 40%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>150mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Grilled chicken has been a favorite in many cuisines worldwide,
              known for its simplicity and health benefits. The use of marinades
              and grilling techniques dates back centuries, enhancing the flavor
              of this lean protein source.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrilledChickenPage;
