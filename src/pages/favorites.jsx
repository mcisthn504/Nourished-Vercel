import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/favorites.css";

import { useFavorites } from "../contexts/FavoritesContext"; // Import context
import hamburgerImage from "../images/hamburger.jpg";

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();

  const goBackToHomePage = () => {
    navigate("/");
  };

  const goToHamburgerPage = () => {
    navigate("/hamburger");
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
                src={hamburgerImage}
                alt={item}
                className="favorite-image"
                onClick={goToHamburgerPage}
              />
              <h2 className="favorite-name">{item}</h2>
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
