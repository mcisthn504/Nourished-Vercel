import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import pancakesImage from "../images/pancakesImage.jpg";

const LowCaloriePage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const lowCalorieDishes = [
    { name: "pancakes", image: pancakesImage, path: "/pancakes" },
  ];

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

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
          <div
            className="dessert-item"
            key={index}
            onClick={() => handleNavigate(dish.path)}
            style={{ cursor: "pointer" }}
          >
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

