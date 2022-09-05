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
      {showScore || !question ? (
        <div className="score-section">You scored {score} of {questionsNumber}</div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {questionCount}</span>/{questionsNumber}
            </div>
            <div className="question-text">{question.text}</div>
          </div>
          <div className="answer-section">
            {question.answers.map((answer, index) => {
              return (
                <button key={index} onClick={() => onClickAnswer(question.correctAnswerIndex === index)}>
                  {answer}
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
