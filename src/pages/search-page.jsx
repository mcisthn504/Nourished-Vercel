import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/search.css";

// Images for the items
import grilledChickenImage from "../images/mains1.jpg";
import steakImage from "../images/mains2.jpg";
import pastaImage from "../images/mains3.jpg";
import fishFilletImage from "../images/mains4.jpg";
import pizzaImage from "../images/pizza.jpg";
import hamburgerImage from "../images/hamburger.jpg";
import pizzaHamImage from "../images/pizza_ham.jpg";
import cheeseburgerImage from "../images/cheeseburger.jpg";
import icecreamImage from "../images/icecreamImage.jpg";
import yogurtImage from "../images/yogurt.png";
import pancakesImage from "../images/pancakesImage.jpg";
import grilledFishImage from "../images/grilledFishImage.webp";
import saladImage from "../images/salad.jpg";
import citrusImage from "../images/citrus.png";
import tacosImage from "../images/tacosImage.png";
import wingsImage from "../images/chickenWingsImage.jpg";
import friesImage from "../images/potatoes.png";
import friedRiceImage from "../images/friedRiceImage.jpg";
import bruschettaImage from "../images/starters1.jpg";
import garlicBreadImage from "../images/starters2.jpg";
import capreseSaladImage from "../images/starters3.jpg";
import stuffedMushroomsImage from "../images/starters4.jpg";
import hotDogImage from "../images/hotDogImage.jpg";
import sushiImage from "../images/sushiImage.jpg"


const items = [
  { name: "Pizza", image: pizzaImage, route: "/pizza" },
  { name: "Hamburger", image: hamburgerImage, route: "/hamburger" },
  { name: "Pizza with Ham", image: pizzaHamImage, route: "/pizza-with-ham" },
  { name: "Cheeseburger", image: cheeseburgerImage, route: "/cheeseburger" },
  { name: "Salad", image: saladImage, route: "/salad" },
  { name: "Tacos", image: tacosImage, route: "/tacos" },
  { name: "Vegan Tacos", image: tacosImage, route: "/taco-vegan" },
  { name: "Pasta", image: pastaImage, route: "/pasta" },
  { name: "Sushi", image: sushiImage, route: "/sushi" },
  { name: "Chicken Wings", image: wingsImage, route: "/chicken-wings" },
  { name: "Fried Rice", image: friedRiceImage, route: "/fried-rice" },
  { name: "Hot Dog", image: hotDogImage, route: "/hot-dog" },
  { name: "Steak", image: steakImage, route: "/steak" },
  { name: "Ice Cream", image: icecreamImage, route: "/ice-cream" },
  { name: "Pancakes", image: pancakesImage, route: "/pancakes" },
  { name: "Grilled Fish", image: grilledFishImage, route: "/grilled-fish" },
  { name: "Bruschetta", image: bruschettaImage, route: "/bruschetta" },
  { name: "Garlic Bread", image: garlicBreadImage, route: "/garlic-bread" },
  { name: "Caprese Salad", image: capreseSaladImage, route: "/caprese-salad" },
  { name: "Stuffed Mushrooms", image: stuffedMushroomsImage, route: "/stuffed-mushrooms" },
  { name: "Grilled Chicken", image: grilledChickenImage, route: "/grilled-chicken" },
  { name: "Fish Fillet", image: fishFilletImage, route: "/fish-fillet" },
  { name: "Citrus Delight", image: citrusImage, route: "/citrus-cake" },
  { name: "Yogurt", image: yogurtImage, route: "/yogurt" },
  { name: "potatoes", image: friesImage, route: "/potatoes" },
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
