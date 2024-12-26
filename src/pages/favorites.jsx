import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/favorites.css";

import { useFavorites } from "../contexts/FavoritesContext"; // Import context

// Images for the favorite items
import hamburgerImage from "../images/hamburger.jpg";
import pizzaImage from "../images/pizza.jpg"; // Add the path to your pizza image

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();

  const goBackToHomePage = () => {
    navigate("/");
  };

  const goToHamburgerPage = () => {
    navigate("/hamburger");
  };

  const goToPizzaPage = () => {
    navigate("/pizza");
  };

  return (
    <div className="favorites-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Favorites</h1>
      </header>

      {/* Favorites List */}
      <div className="favorites-list">
        {favorites.length === 0 ? (
          <p className="no-favorites">No favorites added yet.</p>
        ) : (
          favorites.map((item) => (
            <div className="favorite-item" key={item}>
              <img
                src={item === "hamburger" ? hamburgerImage : pizzaImage} // Show appropriate image based on favorite item
                alt={item}
                className="favorite-image"
                onClick={
                  item === "hamburger" ? goToHamburgerPage : goToPizzaPage
                } // Navigate to the right page
              />
              <h2 className="favorite-name">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h2>
              <button
                className="remove-favorite-button"
                onClick={() => removeFavorite(item)}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
