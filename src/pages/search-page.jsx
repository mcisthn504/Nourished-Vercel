import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/search.css";

// Images for the items
import pizzaImage from "../images/pizza.jpg";
import hamburgerImage from "../images/hamburger.jpg";
import pizzaHamImage from "../images/pizza_ham.jpg";
import cheeseburgerImage from "../images/cheeseburger.jpg";
import saladImage from "../images/salad.jpg";
import tacosImage from "../images/tacosImage.png"
import pastaImage from "../images/pastaImage.jpeg";
import sushiImage from "../images/sushiImage.jpg"; 
import wingsImage from "../images/wingsImage.jpg"; 
import friedRiceImage from "../images/friedRiceImage.jpg"; 
import hotDogImage from "../images/hotDogImage.jpg"; 
import steakImage from "../images/steakImage.jpg"; 
import iceCreamImage from "../images/icecreamImage.jpg"; 
import pancakesImage from "../images/pancakesImage.jpg"; 
import grilledFishImage from "../images/grilledFishImage.webp"; 

const items = [
    { name: "Pizza", image: pizzaImage, route: "/pizza" },
    { name: "Hamburger", image: hamburgerImage, route: "/hamburger" },
    { name: "Pizza with ham", image: pizzaHamImage, route: "/pizza-with-ham" },
    { name: "Cheeseburger", image: cheeseburgerImage, route: "/cheeseburger" },
    { name: "Salad", image: saladImage, route: "/salad" },
    { name: "Tacos", image: tacosImage, route: "/tacos" },
    { name: "Pasta", image: pastaImage, route: "/pasta" },
    { name: "Sushi", image: sushiImage, route: "/sushi" },
    { name: "Chicken Wings", image: wingsImage, route: "/chicken-wings" },
    { name: "Fried Rice", image: friedRiceImage, route: "/fried-rice" },
    { name: "Hot Dog", image: hotDogImage, route: "/hot-dog" },
    { name: "Steak", image: steakImage, route: "/steak" },
    { name: "Ice Cream", image: iceCreamImage, route: "/ice-cream" },
    { name: "Pancakes", image: pancakesImage, route: "/pancakes" },
    { name: "Grilled Fish", image: grilledFishImage, route: "/grilled-fish" },
  
];

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchTerm = location.state?.searchTerm || ""; // Get search term from state

  const [searchQuery, setSearchQuery] = useState(initialSearchTerm);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    setSearchQuery(initialSearchTerm || "");
  }, [initialSearchTerm]);

  
  const handleItemClick = (route) => {
    navigate(route);
  };

  return (
    <div className="search-page-search">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Search</h1>
      </header>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar-container">
          <span className="search-icon">
            <i className="material-icons">search</i>
          </span>
          <input
            type="text"
            className="search-bar-search"
            placeholder="Search for an item..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="mic-icon">
            <i className="material-icons">mic</i>
          </span>
        </div>
      </div>

      {/* Conditional Rendering Of Search Results */}
      {filteredItems.length > 0 ? (
        <div className="search-results">
          {filteredItems.map((item) => (
            <div
              className="search-item"
              key={item.name}
              onClick={() => handleItemClick(item.route)}
              style={{ cursor: "pointer" }}
            >
              <img src={item.image} alt={item.name} className="item-image" />
              <h2 className="item-name">{item.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-results">No items match your search.</p>
      )}
    </div>
  );
};

export default SearchPage;
