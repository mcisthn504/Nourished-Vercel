import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/wings-info.css";

import wingsImage from "../images/chickenWingsImage.jpg"; // Add the path to your chicken wings image

const ChickenWingsPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the chicken wings are marked as favorite
  const isFavorite = favorites.includes("chicken wings");

  const handleFavoriteClick = () => {
    toggleFavorite("chicken wings"); // Toggle the favorite status for "chicken wings"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="wings-info-page">
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
        <p className="wings-category">MAIN COURSE</p>
        <div className="wings-container">
          <img src={wingsImage} alt="Chicken Wings" className="wings-image" />
          <h2 className="wings-name">Chicken Wings</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Chicken Wings, Sauce, Spices</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>400 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 25g, Carbs 10g, Fat 30g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 30%, Carbs 15%, Fat 55%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>500mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Chicken wings became popular in the United States, particularly in
              Buffalo, New York, where the famous Buffalo wings originated in the 1960s.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChickenWingsPage;
