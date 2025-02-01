import React, { useState, useEffect } from 'react';

const QuizApp = () => {
  const [quizData, setQuizData] = useState(null);  // Store quiz data
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Store selected answers
  const [score, setScore] = useState(0);  // Store score
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track current question
  const [timeLeft, setTimeLeft] = useState(30); // Timer for each question
  const [isQuizStarted, setIsQuizStarted] = useState(false); // Flag for quiz start
  const [isQuizCompleted, setIsQuizCompleted] = useState(false); // Flag to check if quiz is completed

  // Fetch quiz data from API
  useEffect(() => {
    fetch('http://localhost:5001/quiz')
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error('Error fetching quiz data:', error));
  }, []);

  // Handle answer selection and score calculation
  const handleAnswerSelect = (questionId, optionId, correctAnswerId) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: optionId, // Store the selected option for the question
    }));

    // Check if the selected answer is correct and update the score
    if (optionId === correctAnswerId) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  // Timer effect
  useEffect(() => {
    if (timeLeft === 0) {
      handleNextQuestion();
    }

    const timerId = setInterval(() => {
      if (!isQuizCompleted) {
        setTimeLeft((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(timerId); // Cleanup on component unmount
  }, [timeLeft, isQuizCompleted]);

  // Go to the next question or complete the quiz
  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setTimeLeft(30); // Reset the timer for the next question
    } else {
      setIsQuizCompleted(true); // End the quiz
    }
  };

  // Start the quiz
  const handleStartQuiz = () => {
    setIsQuizStarted(true); // Mark the quiz as started
    setIsQuizCompleted(false); // Reset quiz completion state
    setCurrentQuestionIndex(0); // Start from the first question
    setScore(0); // Reset the score
    setTimeLeft(30); // Reset timer
  };

  // Render the quiz
  return (
    <div>
      {quizData ? (
        !isQuizStarted ? (
          <div>
            <h2>Welcome to the Quiz</h2>
            <button onClick={handleStartQuiz}>Start Quiz</button>
          </div>
        ) : !isQuizCompleted ? (
          <div>
            <h3>Question {currentQuestionIndex + 1}</h3>
            <h2>{quizData.questions[currentQuestionIndex].description}</h2>
            <ul>
              {quizData.questions[currentQuestionIndex].options.map((option) => (
                <li
                  key={option.id}
                  onClick={() =>
                    handleAnswerSelect(
                      quizData.questions[currentQuestionIndex].id,
                      option.id,
                      quizData.questions[currentQuestionIndex].correctAnswerId
                    )
                  }
                  style={{
                    backgroundColor:
                      selectedAnswers[quizData.questions[currentQuestionIndex].id] === option.id
                        ? 'lightblue' // Highlight the selected answer
                        : '',
                  }}
                >
                  {option.description}
                </li>
              ))}
            </ul>
            <div>
              <p>Time Left: {timeLeft}s</p>
              <button onClick={handleNextQuestion}>Next Question</button>
            </div>
          </div>
        ) : (
          <div>
            <h2>Quiz Completed!</h2>
            <p>You have finished the quiz.</p>
            <p>Your score: {score} / {quizData.questions.length}</p>
          </div>
        )
      ) : (
        <p>Loading quiz...</p>
      )}
    </div>
  );
};

export default QuizApp;
