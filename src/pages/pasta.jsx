import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/pasta-info.css";

import pastaImage from "../images/pastaImage.jpeg"; // Add the path to your pasta image

const PastaPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the pasta is marked as favorite
  const isFavorite = favorites.includes("pasta");

  const handleFavoriteClick = () => {
    toggleFavorite("pasta"); // Toggle the favorite status for "pasta"
  };

  const handleReportMistake = () => {
    setIsMenuOpen(false); // Close the menu after selection
    navigate("/report");
  };

  return (
    <div className="pasta-info-page">
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
        <p className="pasta-category">MAIN COURSE</p>
        <div className="pasta-container">
          <img src={pastaImage} alt="Pasta" className="pasta-image" />
          <h2 className="pasta-name">Pasta</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Pasta, Tomato Sauce, Garlic, Olive Oil, Parmesan</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>400 kcal</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 60g, Fat 10g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 20%, Carbs 65%, Fat 15%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>250mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Pasta has its origins in ancient Italy and has been a staple of Italian cuisine for centuries, with regional variations and recipes passed down through generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastaPage;
