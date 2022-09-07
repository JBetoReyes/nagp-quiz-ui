import { useState } from 'react';
import Question from './components/Question/Question';
import { useFetchQuestions } from './hooks/useFetchQuestions';
import './App.css';

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const [questions] = useFetchQuestions();
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setCurrScore((score) => score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((currQuestion) => currQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className="app">
      <Question
        questionsNumber={questions.length}
        question={questions[currentQuestion]}
        onClickAnswer={handleAnswerButtonClick}
        showScore={showScore}
        score={currScore}
        questionCount={currentQuestion + 1}
      />
    </div>
  );
}

export default App;
