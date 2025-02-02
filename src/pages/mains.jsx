import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/starters.css";

import mainsImage1 from "../images/mains1.jpg";
import mainsImage2 from "../images/mains2.jpg";
import mainsImage3 from "../images/mains3.jpg";
import pizzaImage from "../images/pizza.jpg";
import hamburgerImage from "../images/hamburger.jpg";
import pizzaHamImage from "../images/pizza_ham.jpg";
import cheeseburgerImage from "../images/cheeseburger.jpg";
import sushiImage from "../images/sushiImage.jpg";
import grilledFish from "../images/grilledFishImage.webp"


const MainsPage = () => {
  const navigate = useNavigate();

  const goBackToCategories = () => {
    navigate("/categories");
  };

  const mains = [
    { name: "Pizza", image: pizzaImage, path: "/pizza" },
    { name: "Hamburger", image: hamburgerImage, path: "/hamburger" },
    { name: "Pizza with ham", image: pizzaHamImage, path: "/pizza-with-ham" },
    { name: "Cheeseburger", image: cheeseburgerImage, path: "/cheeseburger" },
    { name: "Grilled Chicken", image: mainsImage1, path: "/grilled-chicken" },
    { name: "Steak", image: mainsImage2, path: "/steak" },
    { name: "Pasta", image: mainsImage3, path: "/pasta" },
    { name: "Sushi", image: sushiImage, path: "/sushi" },
    { name: "Grilled Fish", image: grilledFish, path: "/grilled-fish" },
  ];

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };

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
          <div
            className="main-item"
            key={index}
            onClick={() => handleNavigate(main.path)}
            style={{ cursor: "pointer" }}
          >
            <img src={main.image} alt={main.name} className="main-image" />
            <h3 className="main-name">{main.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainsPage;

