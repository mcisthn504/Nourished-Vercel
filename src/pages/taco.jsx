import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import tacoImage from "../images/tacosImage.png"; // Add the path to your taco image

const TacoPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the taco is marked as favorite
  const isFavorite = favorites.includes("taco");

  const handleFavoriteClick = () => {
    toggleFavorite("taco"); // Toggle the favorite status for "taco"
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
          <img src={tacoImage} alt="Taco" className="food-image" />
          <h2 className="food-name">Taco</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Tortilla, Meat, Cheese, Lettuce, Tomato</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>200 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 15g, Carbs 25g, Fat 10g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 30%, Carbs 50%, Fat 20%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>300mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The taco is a traditional Mexican dish that dates back to ancient
              times, with evidence of its existence in Aztec culture.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TacoPage;
