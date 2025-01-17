import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import steakImage from "../images/steakImage.jpg"; // Add the path to your steak image

const SteakPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the steak is marked as favorite
  const isFavorite = favorites.includes("steak");

  const handleFavoriteClick = () => {
    toggleFavorite("steak"); // Toggle the favorite status for "steak"
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
          <img src={steakImage} alt="Steak" className="food-image" />
          <h2 className="food-name">Steak</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Beef, Seasoning, Butter</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>600 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 50g, Carbs 0g, Fat 45g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 40%, Carbs 0%, Fat 60%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>800mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Steak has long been a symbol of fine dining and originates from
              traditional methods of cooking beef in European and American
              cuisines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SteakPage;
