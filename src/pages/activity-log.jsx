import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/activity-log.css";

const ActivityLog = () => {
  const [activityLog, setActivityLog] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const logData = JSON.parse(localStorage.getItem("activityLog")) || [];
    setActivityLog(logData);
  }, []);

  // Clear the entire log
  const clearLog = () => {
    localStorage.removeItem("activityLog");
    setActivityLog([]);
  };

  // Navigate to quiz review
  const handleReviewQuiz = (log) => {
    navigate(`/daily-challenge/${log.state.quizId}`, {
      state: { ...log.state, fromReview: true },
    });
  };

  const handleSeeInfoPic = () => {
    navigate("/hamburger");
  };
  const handleSeeInfo = () => {
    navigate("/pizza");
  };
  const handleReviewComparison = (comparison) => {
    navigate("/compare/result", { state: { ...comparison } });
  };

  return (
    <div className="activity-log">
      <header className="header">
        <button className="back-button" onClick={() => window.history.back()}>
          <i className="material-icons">arrow_back</i>
        </button>
        <h1>Activity Log</h1>
      </header>

      {activityLog.length > 0 && (
        <div className="clear-log-section">
          <button className="clear-log-button" onClick={clearLog}>
            Clear Log
          </button>
        </div>
      )}

      <div className="log-list">
        {activityLog.length > 0 ? (
          activityLog.reverse().map((log, index) => (
            <div key={index} className="log-entry">
              <strong>{log.type}:</strong>
              <p dangerouslySetInnerHTML={{ __html: log.details }}></p>
              <p className="timestamp">{log.timestamp}</p>

              {log.state && log.type === "Quiz" && (
                <button
                  className="review-quiz-button"
                  onClick={() => handleReviewQuiz(log)}
                >
                  Review Quiz
                </button>
              )}
              {/* Show "See Info" button for photo searches */}
              {log.type === "Pic Analysis" && (
                <button
                  className="review-quiz-button"
                  onClick={() => handleSeeInfoPic(log.foodResult)}
                >
                  See Info
                </button>
              )}
              {/* Show "See Info" button for navbar searches */}
              {log.type === "Food Search" && (
                <button
                  className="review-quiz-button"
                  onClick={() => handleSeeInfo(log.foodResult)}
                >
                  See Info
                </button>
              )}
              {/* Show "Review Comparison" button for comparison entries */}
              {log.type === "Comparison" && (
                <button
                  className="review-quiz-button"
                  onClick={() => handleReviewComparison(log.comparisonResult)}
                >
                  Review Comparison
                </button>
              )}
            </div>
          ))
        ) : (
          <p className="empty-log">No activities logged yet.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;
