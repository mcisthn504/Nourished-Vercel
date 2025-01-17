import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/favorites.css";
import { useFavorites } from "../contexts/FavoritesContext";

// Import all images
import pizzaImage from "../images/pizza.jpg";
import hamburgerImage from "../images/hamburger.jpg";
import pizzaHamImage from "../images/pizza_ham.jpg";
import cheeseburgerImage from "../images/cheeseburger.jpg";
import saladImage from "../images/salad.jpg";
import tacosImage from "../images/tacosImage.png";
import pastaImage from "../images/pastaImage.jpeg";
import sushiImage from "../images/sushiImage.jpg";
import wingsImage from "../images/wingsImage.jpg";
import friedRiceImage from "../images/friedRiceImage.jpg";
import hotDogImage from "../images/hotDogImage.jpg";
import steakImage from "../images/steakImage.jpg";
import iceCreamImage from "../images/icecreamImage.jpg";
import pancakesImage from "../images/pancakesImage.jpg";
import grilledFishImage from "../images/grilledFishImage.webp";

// Map of items to images and routes
const itemDetails = {
  pizza: { image: pizzaImage, route: "/pizza" },
  hamburger: { image: hamburgerImage, route: "/hamburger" },
  "pizza with ham": { image: pizzaHamImage, route: "/pizza-with-ham" },
  cheeseburger: { image: cheeseburgerImage, route: "/cheeseburger" },
  salad: { image: saladImage, route: "/salad" },
  taco: { image: tacosImage, route: "/tacos" },
  pasta: { image: pastaImage, route: "/pasta" },
  sushi: { image: sushiImage, route: "/sushi" },
  "chicken wings": { image: wingsImage, route: "/chicken-wings" },
  "fried rice": { image: friedRiceImage, route: "/fried-rice" },
  "hot dog": { image: hotDogImage, route: "/hot-dog" },
  steak: { image: steakImage, route: "/steak" },
  "ice cream": { image: iceCreamImage, route: "/ice-cream" },
  pancakes: { image: pancakesImage, route: "/pancakes" },
  "grilled fish": { image: grilledFishImage, route: "/grilled-fish" },

};


const FavoritesPage = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFavorites, setFilteredFavorites] = useState(favorites);

  // Handle search input
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    setFilteredFavorites(
      favorites.filter((item) =>
        item.toLowerCase().includes(query)
      )
    );
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

      {/* Search Bar */}
      <div className="search-bar-container-fav">
        <input
          type="text"
          className="search-bar-fav"
          placeholder="Search favorites..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="reset-button" onClick={resetSearch}>
          Show All
        </button>
      </div>

      {/* Favorites List */}
      <div className="favorites-list">
        {filteredFavorites.length === 0 ? (
          <p className="no-favorites">No favorites match your search.</p>
        ) : (
          filteredFavorites.map((item) => {
            const itemDetail = itemDetails[item.toLowerCase()] || {};
            return (
              <div className="favorite-item" key={item}>
                <img
                  src={itemDetail.image}
                  alt={item}
                  className="favorite-image"
                  onClick={() => navigate(itemDetail.route || "/")}
                />
                <h2 className="favorite-name">
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </h2>
                <button
                  className="remove-favorite-button"
                  onClick={() => {
                    removeFavorite(item);
                    setFilteredFavorites(
                      filteredFavorites.filter((fav) => fav !== item)
                    );
                  }}
                >
                  Remove
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
