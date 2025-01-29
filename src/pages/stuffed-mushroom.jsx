import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import stuffedMushroomImage from "../images/starters4.jpg"; // Add the correct path to your stuffed mushrooms image

const StuffedMushroomPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if stuffed mushrooms are marked as a favorite
  const isFavorite = favorites.includes("stuffed mushrooms");

  const handleFavoriteClick = () => {
    toggleFavorite("stuffed mushrooms"); // Toggle the favorite status for "stuffed mushrooms"
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
          <img
            src={stuffedMushroomImage}
            alt="Stuffed Mushrooms"
            className="food-image"
          />
          <h2 className="food-name">Stuffed Mushrooms</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Mushrooms, Breadcrumbs, Cheese, Garlic, Parsley</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>120 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 5g, Carbs 10g, Fat 8g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 15%, Carbs 40%, Fat 45%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>180mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Stuffed mushrooms are a classic appetizer that originated in
              Europe. The filling varies by region, but they often include cheese,
              breadcrumbs, and aromatic herbs. This versatile dish has gained
              popularity worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StuffedMushroomPage;
