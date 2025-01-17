import React from "react";
import hotDogImage from "../images/hotDogImage.jpg";
import "../styles/food-info.css";

const HotDogInfoPage = () => {
  return (
    <div className="food-info-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Hot Dog</h1>
        <button className="favorite-button">
          <i className="material-icons">favorite_border</i>
        </button>
      </header>

      {/* Hot Dog Image and Name */}
      <div className="food-container">
        <img
          src={hotDogImage}
          alt="Hot Dog"
          className="food-image"
        />
        <h2 className="food-name">Hot Dog</h2>
        <p className="food-category">Fast Food</p>
      </div>

      {/* Information List */}
      <div className="info-list">
        <div className="info-row">
          <h3>Calories</h3>
          <p>300 kcal per serving</p>
        </div>
        <div className="info-row">
          <h3>Ingredients</h3>
          <p>Bread, sausage, mustard, ketchup, optional toppings.</p>
        </div>
        <div className="info-row">
          <h3>Preparation Time</h3>
          <p>10 minutes</p>
        </div>
      </div>
    </div>
  );
};

export default HotDogInfoPage;
