import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/food-info.css";

import pizzaHamImage from "../images/pizza_ham.jpg"; // Add the path to your pizza with ham image

const PizzaWithHamPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for dropdown menu

  // Check if the pizza with ham is marked as favorite
  const isFavorite = favorites.includes("pizza with ham");

  const handleFavoriteClick = () => {
    toggleFavorite("pizza with ham"); // Toggle the favorite status for "pizza with ham"
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
          <img
            src={pizzaHamImage}
            alt="Pizza with Ham"
            className="food-image"
          />
          <h2 className="food-name">Pizza with Ham</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Pizza Dough, Tomato Sauce, Mozzarella, Ham</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>270 kcal per slice</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 30g, Fat 10g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 20%, Carbs 55%, Fat 25%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>500mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Pizza with ham is a popular variation of traditional Italian pizza,
              blending savory cured ham with the rich flavors of tomato and cheese.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaWithHamPage;
