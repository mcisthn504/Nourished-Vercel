import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import saladImage from "../images/salad.jpg";
import pastaImage from "../images/pastaImage.jpeg";
import tacosImage from "../images/tacosImage.png";
import citrusImage from "../images/citrus.png"; // Placeholder for a vegetarian option

const VegetarianPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const vegetarianDishes = [
    { name: "Fresh Salad", image: saladImage, path: "/salad" },
    { name: "Vegetarian Pasta", image: pastaImage, path: "/pasta" },
    { name: "Vegan Tacos", image: tacosImage, path: "/taco-vegan" },
    { name: "Citrus Delight", image: citrusImage, path: "/citrus-cake" },
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
        <h1 className="title">Vegetarian</h1>
      </header>

      {/* Vegetarian Dishes List */}
      <div className="desserts-list">
        {vegetarianDishes.map((dish, index) => (
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

export default VegetarianPage;

