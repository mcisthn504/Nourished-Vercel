import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import wingsImage from "../images/chickenWingsImage.jpg";
import saladImage from "../images/salad.jpg";
import friesImage from "../images/potatoes.png"; // Assuming this is for fries or roasted potatoes
import friedRiceImage from "../images/friedRiceImage.jpg";

const AppetizersPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const appetizers = [
    { name: "Chicken Wings", image: wingsImage },
    { name: "Salad", image: saladImage },
    { name: "Potatoes", image: friesImage },
    { name: "Fried Rice", image: friedRiceImage },
  ];

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Appetizers</h1>
      </header>

      {/* Appetizers List */}
      <div className="desserts-list">
        {appetizers.map((appetizer, index) => (
          <div className="dessert-item" key={index}>
            <img
              src={appetizer.image}
              alt={appetizer.name}
              className="dessert-image"
            />
            <h3 className="dessert-name">{appetizer.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppetizersPage;
