import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import saladImage from "../images/salad.jpg";
import grilledVegetablesImage from "../images/grilledFishImage.webp"; // Replace with an actual vegetarian image
import pastaImage from "../images/pastaImage.jpeg";
import citrusImage from "../images/citrus.png"; // Placeholder for a vegetarian option

const VegetarianPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const vegetarianDishes = [
    { name: "Fresh Salad", image: saladImage },
    { name: "Grilled Vegetables", image: grilledVegetablesImage },
    { name: "Vegetarian Pasta", image: pastaImage },
    { name: "Citrus Delight", image: citrusImage },
  ];

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Vegetarian</h1>
      </header>

      {/* Vegetarian Dishes List */}
      <div className="desserts-list">
        {vegetarianDishes.map((dish, index) => (
          <div className="dessert-item" key={index}>
            <img
              src={dish.image}
              alt={dish.name}
              className="dessert-image"
            />
            <h3 className="dessert-name">{dish.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VegetarianPage;
