import React from "react";
import { Link } from "react-router-dom";
import "../styles/home-page.css";
import DailyChallengeImage from "../images/daily-challenge.png";
import TakeAPicImage from "../images/take-a-pic.png";
import CompareImage from "../images/compare.png";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <div className="logo">
          <h1>NourishED</h1>
        </div>
        <div className="search-section">
          <div className="search-bar-container">
            <i className="search-icon">🔍</i>
            <input
              type="text"
              className="search-bar"
              placeholder="Search food..."
            />
            <i className="mic-icon">🎤</i>
          </div>
        </div>
      </header>

      <div className="categories">
        <div className="categories-header">
          <h2>Categories</h2>
          <a href="#" className="see-all-link">
            See all
          </a>
        </div>
        <div className="category-tags">
          <span className="tag">Seconds</span>
          <span className="tag">Fruits</span>
          <span className="tag">Proteic Foods</span>
          <span className="tag">Appetizers</span>
        </div>
      </div>

      <section className="cards">
        <div className="card">
          <Link to="/daily-challenge">
            <h3>Daily Challenge</h3>
            <div className="card-content">
              <img src={DailyChallengeImage} alt="Daily Challenge" />
            </div>
          </Link>
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

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <Link to="/" className="active">
          <i className="material-icons">home</i>
          <span>Home</span>
        </Link>
        <Link to="/camera">
          <i className="material-icons">camera_alt</i>
          <span>Camera</span>
        </Link>
        <Link to="/favorites">
          <i className="material-icons">favorite</i>
          <span>Favorites</span>
        </Link>
        <Link to="/profile">
          <i className="material-icons">person</i>
          <span>Profile</span>
        </Link>
        <Link to="/activity-log">
          <i className="material-icons">history</i>
          <span>Activity Log</span>
        </Link>
      </nav>
    </div>
  );
};

export default HomePage;
