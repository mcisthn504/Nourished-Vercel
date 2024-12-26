import React from "react";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../contexts/FavoritesContext"; // Import the Favorites context
import "../styles/hamburger-info.css";

import pizzaImage from "../images/pizza.jpg"; // Add the path to your pizza image

const PizzaPage = () => {
  const navigate = useNavigate();
  const { favorites, toggleFavorite } = useFavorites(); // Use the context

  // Check if the pizza is marked as favorite
  const isFavorite = favorites.includes("pizza");

  const goBackToHomePage = () => {
    navigate("/");
  };

  const handleFavoriteClick = () => {
    toggleFavorite("pizza"); // Toggle the favorite status for "pizza"
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
          <img src={pizzaImage} alt="Pizza" className="hamburger-image" />
          <h2 className="hamburger-name">Pizza</h2>
        </div>
        <div className="info-list">
          <div className="info-row">
            <h3>Ingredients</h3>
            <p>Crust, Tomato Sauce, Cheese, Pepperoni, Olives</p>
          </div>
          <div className="info-row">
            <h3>Calories</h3>
            <p>280 kcal per slice</p>
          </div>
          <div className="info-row">
            <h3>Nutrients</h3>
            <p>Protein 12g, Carbs 36g, Fat 14g</p>
          </div>
          <div className="info-row">
            <h3>Macros</h3>
            <p>Protein 15%, Carbs 45%, Fat 40%</p>
          </div>
          <div className="info-row">
            <h3>Sodium</h3>
            <p>600mg</p>
          </div>
          <div className="info-row">
            <h3>History</h3>
            <p>
              Pizza originated in Italy, particularly in Naples. It was
              initially a simple dish made with flatbread, tomato, and cheese,
              but over time it became one of the most popular foods worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
