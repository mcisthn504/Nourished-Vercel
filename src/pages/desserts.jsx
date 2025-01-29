import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/desserts.css";

// Import dessert images
import icecreamImage from "../images/icecreamImage.jpg";
import yogurtImage from "../images/yogurt.png";
import pancakesImage from "../images/pancakesImage.jpg";
import cakeImage from "../images/citrus.png"; // Assuming this is for a dessert-like cake

const DessertsPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  // Define desserts with their respective navigation paths
  const desserts = [
    { name: "Ice Cream", image: icecreamImage, path: "/ice-cream" },
    { name: "Yogurt", image: yogurtImage, path: "/yogurt" },
    { name: "Pancakes", image: pancakesImage, path: "/pancakes" },
    { name: "Citrus Cake", image: cakeImage, path: "/citrus-cake" }, // Add this route if needed
  ];

  // Function to handle navigation on card click
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
        <h1 className="title">Desserts</h1>
      </header>

      {/* Desserts List */}
      <div className="desserts-list">
        {desserts.map((dessert, index) => (
          <div
            className="dessert-item"
            key={index}
            onClick={() => handleNavigate(dessert.path)}
            style={{
              cursor: dessert.path ? "pointer" : "not-allowed",
              opacity: dessert.path ? 1 : 0.6,
            }}
          >
            <img
              src={dessert.image}
              alt={dessert.name}
              className="dessert-image"
            />
            <h3 className="dessert-name">{dessert.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DessertsPage;
