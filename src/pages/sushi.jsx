import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/sushi-info.css";

import sushiImage from "../images/sushiImage.jpg"; // Add the path to your sushi image

const SushiPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the sushi is marked as favorite
  const isFavorite = favorites.includes("sushi");

  const handleFavoriteClick = () => {
    toggleFavorite("sushi"); // Toggle the favorite status for "sushi"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="sushi-info-page">
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
        <p className="sushi-category">MAIN COURSE</p>
        <div className="sushi-container">
          <img src={sushiImage} alt="Sushi" className="sushi-image" />
          <h2 className="sushi-name">Sushi</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Rice, Fish, Seaweed, Vegetables</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>250 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 15g, Carbs 40g, Fat 5g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 30%, Carbs 60%, Fat 10%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>200mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Sushi originated in Japan as a method of preserving fish by
              fermenting it with rice. Over time, it evolved into the fresh and
              diverse dishes we enjoy today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SushiPage;
