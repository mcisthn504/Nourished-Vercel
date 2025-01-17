import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import grilledFishImage from "../images/grilledFishImage.webp"; // Add the path to your grilled fish image

const GrilledFishPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the grilled fish is marked as favorite
  const isFavorite = favorites.includes("grilled fish");

  const handleFavoriteClick = () => {
    toggleFavorite("grilled fish"); // Toggle the favorite status for "grilled fish"
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
        <p className="food-category">MAIN COURSE</p>
        <div className="food-container">
          <img src={grilledFishImage} alt="Grilled Fish" className="food-image" />
          <h2 className="food-name">Grilled Fish</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Fish, Olive Oil, Lemon, Garlic, Herbs</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>220 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 25g, Carbs 0g, Fat 12g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 55%, Carbs 0%, Fat 45%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>150mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Grilling fish is an ancient culinary technique that has been practiced
              worldwide, celebrated for its ability to enhance the natural flavors of
              fresh fish with minimal seasoning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrilledFishPage;
