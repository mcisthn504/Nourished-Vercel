import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "../styles/categories.css"; // Import the corresponding CSS file

// Placeholder images for each category (circle style)
const placeholderImage = "./images/hamburger.jpeg";

const CategoriesPage = () => {
  const navigate = useNavigate();

  const goBackToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="categories-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToHomePage}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Categories</h1>
      </header>

      {/* Categories List */}
      <div className="categories-list">
        <div className="category-item">
          <Link to="/starters">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Starters</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/mains">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Mains</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/desserts">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Desserts</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/appetizers">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Appetizers</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/snacks">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Snacks</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/vegetarian">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Vegetarian</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/vegan">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Vegan</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/gluten-free">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Gluten Free</h3>
          </Link>
        </div>
        <div className="category-item">
          <Link to="/low-calorie">
            <div
              className="category-image"
              style={{ backgroundImage: `url(${placeholderImage})` }}
            ></div>
            <h3 className="category-name">Low Calorie</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesPage;
