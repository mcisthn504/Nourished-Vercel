import React, { useState } from "react";
import { useNavigate, useLocation /*Link */ } from "react-router-dom";
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
      "Beef can be safely consumed rare because most harmful bacteria, like E. coli or Salmonella, live on the surface of the meat. When the outer layer of the steak is seared, it kills off these bacteria. This is not the case for chicken. Bacteria such as Salmonella or Campylobacter can penetrate deeper into chicken meat, especially if the chicken is improperly handled or stored. Therefore, to ensure chicken is safe to eat, it must be cooked thoroughly to an internal temperature of 165°F (75°C), ensuring all harmful bacteria are destroyed throughout the meat.",
  },
  {
    id: 2,
    question: "Which vitamin is most commonly found in citrus fruits?",
    options: ["A. Vitamin A", "B. Vitamin B", "C. Vitamin C", "D. Vitamin D"],
    correctAnswer: "C",
    image: citrusImage,
    explanation:
      "Citrus fruits like oranges, lemons, limes, and grapefruits are rich in Vitamin C (ascorbic acid). Vitamin C is essential for the growth, development, and repair of body tissues. It plays a key role in immune function, helps the body absorb iron from plant-based foods, and is important for collagen production, which aids in wound healing and skin health. A deficiency in Vitamin C can lead to scurvy, a disease that causes fatigue, swollen gums, and joint pain. Consuming citrus fruits regularly ensures a sufficient intake of this crucial vitamin.",
  },
  {
    id: 3,
    question: "Which of the following foods is considered a probiotic?",
    options: ["A. Rice", "B. Yogurt", "C. Carrot", "D. Bread"],
    correctAnswer: "B",
    image: yogurtImage,
    explanation:
      "Yogurt is considered a probiotic food because it contains live beneficial bacteria, such as Lactobacillus and Bifidobacterium, that promote a healthy gut microbiome. These bacteria can improve digestion, boost immune function, and may reduce symptoms of irritable bowel syndrome (IBS). Fermentation, the process by which yogurt is made, enhances the growth of these beneficial bacteria. Consuming probiotic-rich foods like yogurt helps restore the natural balance of gut bacteria, which can be disrupted by illness, antibiotics, or poor diet.",
  },
  {
    id: 4,
    question: "What is the main nutrient in potatoes?",
    options: ["A. Protein", "B. Carbohydrates", "C. Fats", "D. Fiber"],
    correctAnswer: "B",
    image: potatoImage,
    explanation:
      "Potatoes are primarily composed of carbohydrates, making them an excellent source of energy. The majority of the carbohydrates in potatoes are starches, which the body breaks down into glucose to fuel its activities. Potatoes also provide important nutrients like Vitamin C, potassium, and fiber, particularly if the skin is left on. Although they are often criticized for their carbohydrate content, potatoes are a nutrient-dense food that can be part of a healthy diet when prepared without excessive butter, oil, or frying.",
  },
];

const DailyChallenge = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Read quiz index from URL or default to 0
  const params = new URLSearchParams(location.search);
  const currentQuizIndex = parseInt(params.get("index")) || 0;

  const handleAnswerSelect = (answer) => {
    if (!showResults) {
      setSelectedAnswer(answer);
    }
  };

  const handleConfirm = () => {
    const currentQuiz = quizData[currentQuizIndex];
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
    if (currentQuizIndex < quizData.length - 1) {
      navigate(`/daily-challenge?index=${currentQuizIndex + 1}`);
      setShowResults(false);
      setSelectedAnswer(null);
    } else {
      alert("You've completed all quizzes!");
      navigate("/");
    }
  };

  const seeExplanation = () => {
    navigate(
      `/explanation/${quizData[currentQuizIndex].id}?next=${
        currentQuizIndex + 1
      }`
    );
  };

  const currentQuiz = quizData[currentQuizIndex];

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
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuizIndex + 1) / quizData.length) * 100}%`,
                }}
              ></div>
            </div>
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
