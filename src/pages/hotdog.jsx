import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import hotDogImage from "../images/hotDogImage.jpg"; // Add the path to your hot dog image

const HotDogPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the hot dog is marked as favorite
  const isFavorite = favorites.includes("hot dog");

  const handleFavoriteClick = () => {
    toggleFavorite("hot dog"); // Toggle the favorite status for "hot dog"
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
      <p className="food-category">SNACK</p>
        <div className="food-container">
          <img src={hotDogImage} alt="Hot Dog" className="food-image" />
          <h2 className="food-name">Hot Dog</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Bun, Sausage, Mustard, Ketchup, Onions, Relish</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>300 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 28g, Fat 15g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 20%, Carbs 50%, Fat 30%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>700mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The hot dog originated in Germany and was brought to the United States
              by German immigrants. It became popular at baseball games and fairs,
              quickly becoming an iconic fast food item.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotDogPage;

