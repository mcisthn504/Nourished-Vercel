import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import fishFilletImage from "../images/mains4.jpg"; // Add the correct path to your fish fillet image

const FishFilletPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if fish fillet is marked as a favorite
  const isFavorite = favorites.includes("fish fillet");

  const handleFavoriteClick = () => {
    toggleFavorite("fish fillet"); // Toggle the favorite status for "fish fillet"
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
          <img src={fishFilletImage} alt="Fish Fillet" className="food-image" />
          <h2 className="food-name">Fish Fillet</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Fish Fillet, Lemon, Olive Oil, Garlic, Herbs</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>180 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 25g, Carbs 0g, Fat 8g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 65%, Carbs 0%, Fat 35%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>90mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Fish fillet has been a staple in coastal cuisines for centuries,
              prized for its delicate flavor and nutritional benefits. Grilled,
              baked, or pan-seared, it is a versatile dish enjoyed worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FishFilletPage;
