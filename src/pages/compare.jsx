import React from "react";
import "../styles/compare.css";

function Compare() {
  return (
    <div className="compare-page">
      <div className="header">
        <button
          className="back-button"
          onClick={() => (window.location.href = "/")}
        >
          &larr;
        </button>
        <h1 className="title">Compare</h1>
      </div>
      <div className="compare-container">
        <div className="triangle-container left-triangle">
          <div className="button-container">
            <button
              className="button"
              onClick={() => (window.location.href = "/compare/camera")}
            >
              <i className="material-icons">camera_alt</i>
              Camera
            </button>
            <button
              className="button"
              onClick={() => (window.location.href = "/compare/search")}
            >
              <i className="material-icons">search</i>
              Search
            </button>
          </div>
        </div>
        <div className="triangle-container right-triangle">
          <div className="button-container">
            <button
              className="button"
              onClick={() => (window.location.href = "/compare/camera")}
            >
              <i className="material-icons">camera_alt</i>
              Camera
            </button>
            <button
              className="button"
              onClick={() => (window.location.href = "/compare/search")}
            >
              <i className="material-icons">search</i>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Compare;
