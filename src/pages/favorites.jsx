import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/favorites.css";

import { useFavorites } from "../contexts/FavoritesContext"; // Import context

// Images for the favorite items
import hamburgerImage from "../images/hamburger.jpg";
import pizzaImage from "../images/pizza.jpg"; // Add the path to your pizza image

const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  const goToHamburgerPage = () => {
    navigate("/hamburger");
  };

  const goToPizzaPage = () => {
    navigate("/pizza");
  };

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Filter favorites based on query
    const filtered = favorites.filter((item) =>
      item.toLowerCase().includes(query)
    );
    setFilteredFavorites(filtered);
  };

  // Reset the search
  const resetSearch = () => {
    setSearchQuery("");
    setFilteredFavorites(favorites);
  };

  return (
    <div className="favorites-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Favorites</h1>
        
      </header>

      <div className="search-bar-container-fav">
        <input
          type="text"
          className="search-bar-fav"
          placeholder="Search favorites..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="reset-button" onClick={resetSearch}>
          Reset
        </button>
      </div>
      
      {/* Favorites List */}
      <div className="favorites-list">
        {filteredFavorites.length === 0 ? (
          <p className="no-favorites">No favorites match your search.</p>
        ) : (
          filteredFavorites.map((item) => (
            <div className="favorite-item" key={item}>
              <img
                src={item === "hamburger" ? hamburgerImage : pizzaImage}
                alt={item}
                className="favorite-image"
                onClick={
                  item === "hamburger" ? goToHamburgerPage : goToPizzaPage
                }
              />
              <h2 className="favorite-name">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </h2>
              <button
                className="remove-favorite-button"
                onClick={() => {
                  removeFavorite(item);
                  const updatedFavorites = favorites.filter((fav) => fav !== item);
                  setFilteredFavorites(updatedFavorites);
                }}
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
