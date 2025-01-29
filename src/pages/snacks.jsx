import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import hotDogImage from "../images/hotDogImage.jpg";
import tacosImage from "../images/tacosImage.png";
import grilledFishImage from "../images/grilledFishImage.webp"; // Placeholder for a snack option

const SnacksPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const snacks = [
    { name: "Hot Dog", image: hotDogImage, path: "/hot-dog" },
    { name: "Tacos", image: tacosImage, path: "/tacos" },
    { name: "Grilled Fish Bites", image: grilledFishImage, path: "/grilled-fish" },
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
        <h1 className="title">Snacks</h1> {/* Added "Snacks" to the header */}
      </header>

      {/* Snacks List */}
      <div className="desserts-list">
        {snacks.map((snack, index) => (
          <div
            className="dessert-item"
            key={index}
            onClick={() => handleNavigate(snack.path)}
            style={{ cursor: "pointer" }}
          >
            <img src={snack.image} alt={snack.name} className="dessert-image" />
            <h3 className="dessert-name">{snack.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnacksPage;

