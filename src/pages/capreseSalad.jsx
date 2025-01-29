import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import capreseSaladImage from "../images/starters3.jpg"; // Add the correct path to your caprese salad image

const CapreseSaladPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if caprese salad is marked as a favorite
  const isFavorite = favorites.includes("caprese salad");

  const handleFavoriteClick = () => {
    toggleFavorite("caprese salad"); // Toggle the favorite status for "caprese salad"
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
          <img src={capreseSaladImage} alt="Caprese Salad" className="food-image" />
          <h2 className="food-name">Caprese Salad</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Tomatoes, Fresh Mozzarella, Basil, Olive Oil, Salt, Pepper</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>250 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 8g, Carbs 6g, Fat 20g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 12%, Carbs 15%, Fat 73%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>300mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The Caprese Salad originates from the Italian island of Capri. It is a
              simple and refreshing dish that highlights the flavors of fresh
              ingredients and is a staple in Italian cuisine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapreseSaladPage;
