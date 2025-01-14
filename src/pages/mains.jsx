import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/starters.css";

import mainsImage1 from "../images/mains1.jpg";
import mainsImage2 from "../images/mains2.jpg";
import mainsImage3 from "../images/mains3.jpg";
import mainsImage4 from "../images/mains4.jpg";

const MainsPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const mains = [
    { name: "Grilled Chicken", image: mainsImage1 },
    { name: "Steak", image: mainsImage2 },
    { name: "Pasta", image: mainsImage3 },
    { name: "Fish Fillet", image: mainsImage4 },
  ];

  return (
    <div className="mains-page">
      {/* Header */}
      <header className="header">
        <button className="back-button" onClick={goBackToCategories}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1 className="title">Mains</h1>
      </header>

      {/* Mains List */}
      <div className="mains-list">
        {mains.map((main, index) => (
          <div className="main-item" key={index}>
            <img src={main.image} alt={main.name} className="main-image" />
            <h3 className="main-name">{main.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainsPage;
