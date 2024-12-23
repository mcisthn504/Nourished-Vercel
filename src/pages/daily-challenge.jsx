import React, { useState /*, useEffect*/ } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/daily-challenge.css";

import steakImage from "../images/steak.png";
import citrusImage from "../images/citrus.png";
import yogurtImage from "../images/yogurt.png";
import potatoImage from "../images/potatoes.png";

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
      "Beef muscle is sterile inside, while bacteria can penetrate chicken.",
  },
  {
    id: 2,
    question: "Which vitamin is most commonly found in citrus fruits?",
    options: ["A. Vitamin A", "B. Vitamin B", "C. Vitamin C", "D. Vitamin D"],
    correctAnswer: "C",
    image: citrusImage,
    explanation:
      "Citrus fruits are rich in Vitamin C, which boosts the immune system.",
  },
  {
    id: 3,
    question: "Which of the following foods is considered a probiotic?",
    options: ["A. Rice", "B. Yogurt", "C. Carrot", "D. Bread"],
    correctAnswer: "B",
    image: yogurtImage,
    explanation: "Yogurt contains beneficial bacteria that improve gut health.",
  },
  {
    id: 4,
    question: "What is the main nutrient in potatoes?",
    options: ["A. Protein", "B. Carbohydrates", "C. Fats", "D. Fiber"],
    correctAnswer: "B",
    image: potatoImage,
    explanation: "Potatoes are rich in carbohydrates, which provide energy.",
  },
];

const DailyChallenge = () => {
  //const [quizzes, setQuizzes] = useState(quizData);
  const quizzes = quizData;
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  /* useEffect(() => {
    const storedQuizzes = JSON.parse(localStorage.getItem("quizzes"));
    setQuizzes(storedQuizzes || []);
  }, []);
*/
  const handleAnswerSelect = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
    }
  };

  const handleConfirm = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const isCorrect = selectedAnswer === currentQuiz.correctAnswer;

    const activityLog = JSON.parse(localStorage.getItem("activityLog")) || [];
    activityLog.push({
      quizId: currentQuiz.id,
      selectedAnswer,
      isCorrect,
      date: new Date().toISOString(),
    });
    localStorage.setItem("activityLog", JSON.stringify(activityLog));

    setShowResults(true);
  };

  const goToNextQuiz = () => {
    if (currentQuizIndex < quizzes.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1);
      setSelectedAnswer(null);
      setShowResults(false);
    } else {
      alert("You've completed all quizzes!");
    }
  };

  const seeExplanation = () => {
    navigate(`/explanation/${quizzes[currentQuizIndex].id}`);
  };

  const currentQuiz = quizzes[currentQuizIndex];

  return (
    <div className="daily-challenge">
      {currentQuiz && (
        <>
          <header className="header">
            <button
              className="back-button"
              onClick={() => window.history.back()}
            >
              ←
            </button>
            <h1>Daily Challenge</h1>
          </header>

          <div className="quiz-progress">
            <span>
              QUIZ {currentQuizIndex + 1}/{quizzes.length}
            </span>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuizIndex + 1) / quizzes.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          {/* Quiz Image */}
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

            <button
              className="confirm-button"
              onClick={handleConfirm}
              disabled={!selectedAnswer}
            >
              CONFIRM
            </button>

            {showResults && (
              <div className="post-quiz-options">
                <button onClick={seeExplanation}>See Explanation</button>
                <button onClick={goToNextQuiz}>Skip and Next</button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DailyChallenge;
