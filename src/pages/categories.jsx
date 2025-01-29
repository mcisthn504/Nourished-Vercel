import React, { useState } from "react";
import {  useNavigate } from "react-router-dom";
import "../styles/categories.css";

const CategoriesPage = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  const goBackToHomePage = () => {
    navigate("/");
  };

  const handleCategoryClick = (category) => {
    if (category === "starters" || category === "mains"|| category === "desserts"|| category === "appetizers"|| category === "snacks"|| category === "vegetarian"||category === "vegan"|| category === "glutenFree"|| category === "low-calorie") {
      navigate(`/categories/${category}`);
    } else {
      setShowPopup(true); // Show pop-up for unavailable categories
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  // Categories with links
  const categories = [
    { name: "Starters", icon: "restaurant", key: "starters" },
    { name: "Mains", icon: "dining", key: "mains" },
    { name: "Desserts", icon: "cake", key: "desserts" },
    { name: "Appetizers", icon: "fastfood", key: "appetizers" },
    { name: "Snacks", icon: "local_cafe", key: "snacks" },
    { name: "Vegetarian", icon: "grass", key: "vegetarian" },
    { name: "Vegan", icon: "eco", key: "vegan" },
 
  ];

  return (
    <div className="categories-page">
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Categories</h1>
      </header>

      <div className="categories-list">
        {categories.map((category, index) => (
          <div
            className="category-item"
            key={index}
            onClick={() => handleCategoryClick(category.key)}
          >
            <div className="category-icon">
              <i className="material-icons">{category.icon}</i>
            </div>
            <h3 className="category-name">{category.name}</h3>
          </div>
        ))}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>
              This page is not available at the moment. Try with{" "}
              <strong>Starters</strong> or <strong>Mains</strong> instead.
            </p>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
