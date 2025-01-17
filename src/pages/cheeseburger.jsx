import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/cheeseburger-info.css";

import cheeseburgerImage from "../images/cheeseburger.jpg"; // Add the path to your cheeseburger image

const CheeseburgerPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the cheeseburger is marked as favorite
  const isFavorite = favorites.includes("cheeseburger");

  const handleFavoriteClick = () => {
    toggleFavorite("cheeseburger"); // Toggle the favorite status for "cheeseburger"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="cheeseburger-info-page">
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
        <p className="cheeseburger-category">MAIN COURSE</p>
        <div className="cheeseburger-container">
          <img
            src={cheeseburgerImage}
            alt="Cheeseburger"
            className="cheeseburger-image"
          />
          <h2 className="cheeseburger-name">Cheeseburger</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Bun, Beef Patty, Cheese, Lettuce, Tomato</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>350 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 25g, Carbs 30g, Fat 18g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 30%, Carbs 40%, Fat 30%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>650mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The cheeseburger is an American classic that originated in the early
              20th century, combining the beloved hamburger with melted cheese for
              added flavor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheeseburgerPage;
