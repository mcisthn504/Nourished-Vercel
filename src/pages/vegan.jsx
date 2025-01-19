import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import saladImage from "../images/salad.jpg";
import tacosImage from "../images/tacosImage.png";
import grilledVegetablesImage from "../images/grilledFishImage.webp"; // Replace with an actual vegan image
import citrusImage from "../images/citrus.png"; // Placeholder for a vegan dessert

const VeganPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const veganDishes = [
    { name: "Fresh Salad", image: saladImage },
    { name: "Vegan Tacos", image: tacosImage },
    { name: "Grilled Vegetables", image: grilledVegetablesImage },
    { name: "Citrus Delight", image: citrusImage },
  ];

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Vegan</h1>
      </header>

      {/* Vegan Dishes List */}
      <div className="desserts-list">
        {veganDishes.map((dish, index) => (
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

export default VeganPage;
