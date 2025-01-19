import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

import icecreamImage from "../images/icecreamImage.jpg";
import yogurtImage from "../images/yogurt.png";
import pancakesImage from "../images/pancakesImage.jpg";
import cakeImage from "../images/citrus.png"; // Assuming this is for a dessert-like cake

const DessertsPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const desserts = [
    { name: "Ice Cream", image: icecreamImage },
    { name: "Yogurt", image: yogurtImage },
    { name: "Pancakes", image: pancakesImage },
    { name: "Citrus Cake", image: cakeImage },
  ];

  return (
    <div className="desserts-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Desserts</h1>
      </header>

      {/* Desserts List */}
      <div className="desserts-list">
        {desserts.map((dessert, index) => (
          <div className="dessert-item" key={index}>
            <img src={dessert.image} alt={dessert.name} className="dessert-image" />
            <h3 className="dessert-name">{dessert.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsPage;
