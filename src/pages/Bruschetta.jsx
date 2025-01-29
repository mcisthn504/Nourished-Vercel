import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import bruschettaImage from "../images/starters1.jpg"; // Add the correct path to your bruschetta image

const BruschettaPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if bruschetta is marked as a favorite
  const isFavorite = favorites.includes("bruschetta");

  const handleFavoriteClick = () => {
    toggleFavorite("bruschetta"); // Toggle the favorite status for "bruschetta"
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
          <img src={bruschettaImage} alt="Bruschetta" className="food-image" />
          <h2 className="food-name">Bruschetta</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Bread, Tomatoes, Basil, Olive Oil, Garlic</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>180 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 4g, Carbs 22g, Fat 7g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 8%, Carbs 60%, Fat 32%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>250mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
                Bruschetta originated in Italy as a way to use up stale bread by
                toasting it and topping it with fresh ingredients. It&apos;s now a popular
                appetizer enjoyed worldwide.
            </p>
            </div>

        </div>
      </div>
    </div>
  );
};

export default BruschettaPage;
