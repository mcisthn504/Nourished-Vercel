import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import saladImage from "../images/salad.jpg";
import citrusImage from "../images/citrus.png"; // Placeholder for a low-calorie dessert

const LowCaloriePage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const lowCalorieDishes = [
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
        <h1 className="title">Low-Calorie</h1>
      </header>

      {/* Low-Calorie Dishes List */}
      <div className="desserts-list">
        {lowCalorieDishes.map((dish, index) => (
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

export default LowCaloriePage;
