import { useState } from "react";

const Question = ({
  questionsNumber,
  question,
  onClickAnswer,
  showScore,
  score,
  questionCount
}) => {
  return (
    <div className="question-container">
      {showScore ? (
        <div className="score-section">You scored {score} of {questionsNumber}</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionCount}</span>/{questionsNumber}
            </div>
            <div className="question-text">{question.questionText}</div>
          </div>
          <div className="answer-section">
            {question.answerOptions.map(({ answerText, isCorrect }, index) => {
              return (
                <button key={index} onClick={() => onClickAnswer(isCorrect)}>
                  {answerText}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Question;
