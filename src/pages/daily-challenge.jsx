import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/daily-challenge.css";

import steakImage from "../images/steak.png";
import citrusImage from "../images/citrus.png";
import yogurtImage from "../images/yogurt.png";
import potatoImage from "../images/potatoes.png";

// Quiz Data
const quizData = [
  {
    id: 1,
    question: "Why is it possible to eat rare steak and not rare chicken?",
    options: [
      "A. Beef is less likely to contain harmful bacteria than chicken.",
      "B. Beef muscle is naturally sterile inside, while harmful bacteria can penetrate chicken.",
      "C. The high acidity in beef kills bacteria.",
      "D. Cooking temperature for chicken is higher than beef.",
    ],
    correctAnswer: "B",
    image: steakImage,
    explanation:
      "Beef can be safely consumed rare because most harmful bacteria live on the surface...",
  },
  {
    id: 2,
    question: "Which vitamin is most commonly found in citrus fruits?",
    options: ["A. Vitamin A", "B. Vitamin B", "C. Vitamin C", "D. Vitamin D"],
    correctAnswer: "C",
    image: citrusImage,
    explanation:
      "Citrus fruits like oranges are rich in Vitamin C, essential for immune function...",
  },
  {
    id: 3,
    question: "Which of the following foods is considered a probiotic?",
    options: ["A. Rice", "B. Yogurt", "C. Carrot", "D. Bread"],
    correctAnswer: "B",
    image: yogurtImage,
    explanation:
      "Yogurt is a probiotic containing live bacteria that promote gut health...",
  },
  {
    id: 4,
    question: "What is the main nutrient in potatoes?",
    options: ["A. Protein", "B. Carbohydrates", "C. Fats", "D. Fiber"],
    correctAnswer: "B",
    image: potatoImage,
    explanation:
      "Potatoes are rich in carbohydrates, providing energy and essential nutrients...",
  },
];

const DailyChallenge = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check if quiz is in review mode (from activity log)
  const reviewState = location.state || null;

  // Read quiz index from URL or use reviewState
  const params = new URLSearchParams(location.search);
  const currentQuizIndex = parseInt(params.get("index")) || 0;

  // Load quiz based on reviewState or index
  const [currentQuiz, setCurrentQuiz] = useState(null);

  useEffect(() => {
    // Get quiz from the data
    const quiz = quizData.find(
      (q) => q.id === (reviewState?.quizId || quizData[currentQuizIndex]?.id)
    );

    if (quiz) {
      setCurrentQuiz(quiz);
      if (reviewState) {
        // In review mode - lock answer and show results
        setSelectedAnswer(reviewState.selectedAnswer);
        setShowResults(true);
      }
    }
  }, [reviewState, currentQuizIndex]);

  // Handle Answer Selection
  const handleAnswerSelect = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
    }
  };

  // Handle Quiz Confirmation
  const handleConfirm = () => {
    const isCorrect = selectedAnswer === currentQuiz.correctAnswer;

    const activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
    activityLog.push({
      type: "Quiz",
      details: `${
        currentQuiz.question
      }<br/>Your answer: ${selectedAnswer}<br/>Result: ${
        isCorrect ? "Correct" : "Incorrect"
      }`,
      state: {
        quizId: currentQuiz.id,
        selectedAnswer: selectedAnswer,
        isCorrect: isCorrect,
      },
      timestamp: new Date().toLocaleString(),
    });
    localStorage.setItem("activityLog", JSON.stringify(activityLog));

    setShowResults(true);
  };

  // Navigation for Next Quiz
  const goToNextQuiz = () => {
    if (currentQuizIndex < quizData.length - 1) {
      navigate(`/daily-challenge?index=${currentQuizIndex + 1}`);
      setShowResults(false);
      setSelectedAnswer(null);
    } else {
      alert("You've completed all quizzes!");
      navigate("/");
    }
  };

  // Navigate to Explanation
  const seeExplanation = () => {
    navigate(`/explanation/${currentQuiz.id}?next=${currentQuizIndex + 1}`, {
      state: { fromReview: reviewState?.fromReview || false },
    });
  };

  return (
    <div className="daily-challenge">
      {currentQuiz && (
        <>
          <header className="header">
            <button
              className="back-button"
              onClick={() => window.history.back()}
            >
              <i className="material-icons">arrow_back</i>
              Back
            </button>
            <h1>Daily Challenge</h1>
          </header>

          <div className="quiz-progress">
            <span>
              QUIZ {currentQuizIndex + 1}/{quizData.length}
            </span>
          </div>

          <div className="quiz-image-container">
            <img
              src={currentQuiz.image}
              alt="Quiz Illustration"
              className="quiz-image"
            />
          </div>

          <div className="question-container">
            <h2 className="question-title">{currentQuiz.question}</h2>
            <ul className="answers">
              {currentQuiz.options.map((option, index) => (
                <li
                  key={index}
                  onClick={() => handleAnswerSelect(option[0])}
                  className={
                    showResults
                      ? option[0] === currentQuiz.correctAnswer
                        ? "correct"
                        : option[0] === selectedAnswer
                        ? "incorrect"
                        : ""
                      : selectedAnswer === option[0]
                      ? "selected"
                      : ""
                  }
                >
                  {option}
                </li>
              ))}
            </ul>

            {!reviewState && (
              <button
                className="confirm-button"
                onClick={handleConfirm}
                disabled={!selectedAnswer}
              >
                CONFIRM
              </button>
            )}

            {showResults && (
              <div className="post-quiz-options">
                <button onClick={seeExplanation}>See Explanation</button>
                {!reviewState && (
                  <button onClick={goToNextQuiz}>Skip and Next</button>
                )}
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DailyChallenge;
