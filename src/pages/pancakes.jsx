import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import pancakesImage from "../images/pancakesImage.jpg"; // Update if necessary

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
        <p className="food-category">LOW CALORIE</p>
        <div className="food-container">
          <img
            src={pancakesImage}
            alt="Low-Calorie Pancakes"
            className="food-image"
          />
          <h2 className="food-name">Low-Calorie Pancakes</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>
              Whole Wheat Flour, Egg Whites, Low-Fat Milk, Sugar Substitute
              (e.g., Stevia), Baking Powder
            </p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>80 kcal per pancake</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 5g, Carbs 12g, Fat 1g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 25%, Carbs 60%, Fat 15%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>150mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Pancakes have been a staple of breakfast around the world for
              centuries. This lighter version swaps in lower-fat and lower-sugar
              ingredients without sacrificing flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PancakesPage;
