import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/pancakes-info.css";

import pancakesImage from "../images/pancakesImage.jpg"; // Add the path to your pancakes image

const PancakesPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the pancakes are marked as favorite
  const isFavorite = favorites.includes("pancakes");

  const handleFavoriteClick = () => {
    toggleFavorite("pancakes"); // Toggle the favorite status for "pancakes"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="pancakes-info-page">
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
        <p className="pancakes-category">BREAKFAST</p>
        <div className="pancakes-container">
          <img src={pancakesImage} alt="Pancakes" className="pancakes-image" />
          <h2 className="pancakes-name">Pancakes</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Flour, Eggs, Milk, Butter, Sugar</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>150 kcal per pancake</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 4g, Carbs 20g, Fat 5g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 10%, Carbs 70%, Fat 20%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>200mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Pancakes have been a popular breakfast item across cultures for
              centuries, with ancient Greeks and Romans enjoying early versions of
              this dish.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PancakesPage;
