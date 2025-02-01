import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = (currentQuestionIndex / totalQuestions) * 100;
  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
