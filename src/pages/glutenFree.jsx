import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import friedRiceImage from "../images/friedRiceImage.jpg";
import mainsImage4 from "../images/mains4.jpg";

const GlutenFreePage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const glutenFreeDishes = [
    {name: "fried Rice", image: friedRiceImage, path: "/fried-rice"},
    { name: "Fish Fillet", image: mainsImage4, path: "/fish-fillet" },
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
        <h1 className="title">Gluten-Free</h1>
      </header>

      {/* Gluten-Free Dishes List */}
      <div className="desserts-list">
        {glutenFreeDishes.map((dish, index) => (
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

export default GlutenFreePage;

