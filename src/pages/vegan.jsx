import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import tacosImage from "../images/tacosImage.png";

const VeganPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const veganDishes = [
    { name: "Vegan Tacos", image: tacosImage, path: "/taco-vegan" },
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
        <h1 className="title">Vegan</h1>
      </header>

      {/* Vegan Dishes List */}
      <div className="desserts-list">
        {veganDishes.map((dish, index) => (
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

export default VeganPage;

