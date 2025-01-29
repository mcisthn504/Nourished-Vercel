import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import yogurtImage from "../images/yogurt.png"; // Add the correct path to your yogurt image

const YogurtPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if yogurt is marked as a favorite
  const isFavorite = favorites.includes("yogurt");

  const handleFavoriteClick = () => {
    toggleFavorite("yogurt"); // Toggle the favorite status for "yogurt"
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
          <img src={yogurtImage} alt="Yogurt" className="food-image" />
          <h2 className="food-name">Yogurt</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Milk, Live Cultures</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>150 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 10g, Carbs 12g, Fat 4g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 27%, Carbs 50%, Fat 23%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>60mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Yogurt is a dairy product that originated in the Middle East and Central Asia. It has been a staple in many cuisines for thousands of years and is known for its probiotic benefits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YogurtPage;
