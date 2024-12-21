import React from "react";
import "../styles/styles.css";
import DailyChallengeImage from "./daily-challenge.png";
import TakeAPicImage from "./take-a-pic.png";
import CompareImage from "./compare.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1 className="app-title">NourishED</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search food..."
        />
      </header>

      <section className="categories">
        <h2>Categories</h2>
        <div className="category-tags">
          <span className="tag">Seconds</span>
          <span className="tag">Fruits</span>
          <span className="tag">Proteic Foods</span>
          <span className="tag">Appetizers</span>
        </div>
      </section>

      <section className="cards">
        <div className="card">
          <h3>Daily Challenge</h3>
          <div className="card-content">
            <img src={DailyChallengeImage} alt="Daily Challenge" />
          </div>
        </div>
        <div className="card">
          <h3>Take a Pic</h3>
          <div className="card-content">
            <img src={TakeAPicImage} alt="Take a Pic" />
          </div>
        </div>
        <div className="card">
          <h3>Compare</h3>
          <div className="card-content">
            <img src={CompareImage} alt="Compare" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
