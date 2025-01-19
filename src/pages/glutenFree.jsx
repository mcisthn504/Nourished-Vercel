import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import grilledFishImage from "../images/grilledFishImage.webp";
import saladImage from "../images/salad.jpg";
import citrusImage from "../images/citrus.png"; // Placeholder for a gluten-free dessert

const GlutenFreePage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const glutenFreeDishes = [
    { name: "Grilled Fish", image: grilledFishImage },
    { name: "Fresh Salad", image: saladImage },
    { name: "Citrus Delight", image: citrusImage },
  ];

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Gluten-Free</h1>
      </header>

      {/* Gluten-Free Dishes List */}
      <div className="desserts-list">
        {glutenFreeDishes.map((dish, index) => (
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

export default GlutenFreePage;
