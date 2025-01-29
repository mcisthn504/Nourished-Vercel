import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import garlicBreadImage from "../images/starters2.jpg"; // Add the correct path to your garlic bread image

const GarlicBreadPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if garlic bread is marked as a favorite
  const isFavorite = favorites.includes("garlic bread");

  const handleFavoriteClick = () => {
    toggleFavorite("garlic bread"); // Toggle the favorite status for "garlic bread"
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
      <p className="food-category">STARTERS COURSE</p>
        <div className="food-container">
          <img src={garlicBreadImage} alt="Garlic Bread" className="food-image" />
          <h2 className="food-name">Garlic Bread</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Bread, Garlic, Butter, Parsley</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>200 kcal per slice</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 4g, Carbs 20g, Fat 10g</p>
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
              Garlic bread is a popular starter originating in Italy, where it is
              often served as an accompaniment to meals. Its rich garlic and buttery
              flavor have made it a global favorite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarlicBreadPage;
