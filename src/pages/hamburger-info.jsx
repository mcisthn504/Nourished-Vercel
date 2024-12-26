import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/hamburger-info.css";

import hamburgerImage from "../images/hamburger.jpg";

const HamburgerPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context

  // Check if the hamburger is marked as favorite
  const isFavorite = favorites.includes("hamburger");

  const goBackToHomePage = () => {
    navigate("/");
  };

  const handleFavoriteClick = () => {
    toggleFavorite("hamburger"); // Toggle the favorite status for "hamburger"
  };

  return (
    <div className="hamburger-info-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
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
      </header>

      {/* Content */}
      <div className="content">
        <div className="hamburger-container">
          <img
            src={hamburgerImage}
            alt="Hamburger"
            className="hamburger-image"
          />
          <h2 className="hamburger-name">Hamburger</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Bun, Patty, Lettuce, Tomato, Cheese</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>300 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 20g, Carbs 30g, Fat 15g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 25%, Carbs 50%, Fat 25%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>500mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              The hamburger originated in the late 19th or early 20th century,
              evolving from minced meat dishes popular in Hamburg, Germany.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerPage;
