import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/salad-info.css";

import saladImage from "../images/salad.jpg"; // Replace with the correct path

const SaladPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the salad is marked as favorite
  const isFavorite = favorites.includes("salad");

  const handleFavoriteClick = () => {
    toggleFavorite("salad"); // Toggle the favorite status for "salad"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="salad-info-page">
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
        <p className="salad-category">APPETIZER</p>
        <div className="salad-container">
          <img src={saladImage} alt="Salad" className="salad-image" />
          <h2 className="salad-name">Salad</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Lettuce, Tomato, Cucumber, Olive Oil, Lemon</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>120 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 2g, Carbs 10g, Fat 8g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 5%, Carbs 40%, Fat 55%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>80mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Salads have been a staple of healthy eating for centuries, with origins
              tracing back to ancient Roman and Greek cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaladPage;
