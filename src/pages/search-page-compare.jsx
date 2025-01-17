import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { usePhotoContext } from "../contexts/photoContext"; // Import the context
import "../styles/search.css";

// Images for the items
import pizzaImage from "../images/pizza.jpg";
import hamburgerImage from "../images/hamburger.jpg";
import pizzaHamImage from "../images/pizza_ham.jpg";
import cheeseburgerImage from "../images/cheeseburger.jpg";
import saladImage from "../images/salad.jpg";

const items = [
  { name: "Pizza", image: pizzaImage },
  { name: "Hamburger", image: hamburgerImage },
  { name: "Pizza with ham", image: pizzaHamImage },
  { name: "Cheeseburger", image: cheeseburgerImage },
  { name: "Salad", image: saladImage },
];

const SearchPageCompare = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const initialSearchTerm = location.state?.searchTerm || ""; // Get search term from state
  const { side } = location.state || {}; // Get the side ("left" or "right")

  const { setLeftPhoto, setRightPhoto } = usePhotoContext(); // Use the context
  const [searchQuery, setSearchQuery] = useState(initialSearchTerm);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (initialSearchTerm) {
      setSearchQuery(initialSearchTerm);
    }
  }, [initialSearchTerm]);

  const handleItemClick = (item) => {
    // Save the selected item in the appropriate context
    if (side === "left") {
      setLeftPhoto(item.image);
    } else if (side === "right") {
      setRightPhoto(item.image);
    }

    // Navigate back to the compare page
    navigate("/compare");
  };

  return (
    <div className="search-page-search">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => navigate("/compare")}>
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
              onClick={() => handleItemClick(item)}
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

export default SearchPageCompare;
