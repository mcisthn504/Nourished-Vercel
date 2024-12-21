import React from "react";
import "../styles/daily-challenge.css";
import SteakImage from "../images/steak.png";

const DailyChallenge = () => {
  return (
    <div className="daily-challenge">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          ←
        </button>
        <h1>Daily Challenge</h1>
      </header>

      <div className="quiz-progress">
        <span>QUIZ 1/4</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "25%" }}></div>
        </div>
      </div>

      <div className="question-container">
        <img src={SteakImage} alt="" />
        <h2>Question</h2>
        <p>Why is it possible to eat rare steak and not rare chicken?</p>

        <ul className="answers">
          <li>
            A. Beef is less likely to contain harmful bacteria than chicken.
          </li>
          <li>
            B. Beef muscle is naturally sterile inside, while harmful bacteria
            can penetrate deeper into chicken meat.
          </li>
          <li>
            C. The high acidity in beef naturally kills bacteria, unlike
            chicken.
          </li>
          <li>
            D. The cooking temperature required to kill bacteria in chicken is
            higher than that for beef.
          </li>
        </ul>

        <button className="confirm-button">CONFIRM</button>
      </div>
    </div>
  );
};

export default DailyChallenge;
