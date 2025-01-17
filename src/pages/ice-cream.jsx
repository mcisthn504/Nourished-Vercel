import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/ice-cream-info.css";

import iceCreamImage from "../images/icecreamImage.jpg"; // Add the path to your ice cream image

const IceCreamPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the ice cream is marked as favorite
  const isFavorite = favorites.includes("ice cream");

  const handleFavoriteClick = () => {
    toggleFavorite("ice cream"); // Toggle the favorite status for "ice cream"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="ice-cream-info-page">
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
        <p className="ice-cream-category">DESSERT</p>
        <div className="ice-cream-container">
          <img src={iceCreamImage} alt="Ice Cream" className="ice-cream-image" />
          <h2 className="ice-cream-name">Ice Cream</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Milk, Cream, Sugar, Flavorings</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>200 kcal per serving</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 3g, Carbs 25g, Fat 11g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 5%, Carbs 60%, Fat 35%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>100mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Ice cream has been a beloved treat for centuries, with early versions
              appearing in ancient Persia and China. Modern ice cream was developed
              in Italy and France during the Renaissance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamPage;
