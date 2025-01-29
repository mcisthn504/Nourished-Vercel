import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import cakeImage from "../images/citrus.png"; // Add the correct path to your citrus cake image

const CitrusCakePage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if citrus cake is marked as a favorite
  const isFavorite = favorites.includes("citrus cake");

  const handleFavoriteClick = () => {
    toggleFavorite("citrus cake"); // Toggle the favorite status for "citrus cake"
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
      <p className="food-category">VEGETARIAN</p>
        <div className="food-container">
          <img src={cakeImage} alt="Citrus Cake" className="food-image" />
          <h2 className="food-name">Citrus Cake</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Flour, Sugar, Eggs, Citrus Zest, Butter</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>320 kcal per slice</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 4g, Carbs 40g, Fat 15g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 5%, Carbs 65%, Fat 30%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>200mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Citrus cakes have been enjoyed for centuries, combining the tangy
              zest of citrus fruits with the sweetness of traditional cakes. They
              are particularly popular in Mediterranean and tropical cuisines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitrusCakePage;
