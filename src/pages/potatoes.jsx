import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import potatoesImage from "../images/potatoes.png"; // Add the correct path to your potatoes image

const PotatoesPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if potatoes are marked as a favorite
  const isFavorite = favorites.includes("potatoes");

  const handleFavoriteClick = () => {
    toggleFavorite("potatoes"); // Toggle the favorite status for "potatoes"
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
          <img src={potatoesImage} alt="Potatoes" className="food-image" />
          <h2 className="food-name">Potatoes</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Potatoes, Olive Oil, Salt, Spices</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>150 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 3g, Carbs 30g, Fat 2g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 6%, Carbs 80%, Fat 14%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>200mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Potatoes originated in South America and were first cultivated by
              the Inca people in Peru. They are now a staple food around the world
              and are prepared in various ways, from baked to fried.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PotatoesPage;
