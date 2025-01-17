import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import friedRiceImage from "../images/friedRiceImage.jpg"; // Add the path to your fried rice image

const FriedRicePage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the fried rice is marked as favorite
  const isFavorite = favorites.includes("fried rice");

  const handleFavoriteClick = () => {
    toggleFavorite("fried rice"); // Toggle the favorite status for "fried rice"
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
          <img src={friedRiceImage} alt="Fried Rice" className="food-image" />
          <h2 className="food-name">Fried Rice</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Rice, Vegetables, Soy Sauce, Egg, Chicken</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>350 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 50g, Fat 8g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 20%, Carbs 65%, Fat 15%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>600mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Fried rice originated in China during the Sui dynasty and has since
              become a staple in various Asian cuisines, with numerous regional
              variations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriedRicePage;
