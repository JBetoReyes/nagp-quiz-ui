import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Question from "./components/Question/Question";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [currScore, setCurrScore] = useState(0);
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setCurrScore(score => score + 1)
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((currQuestion) => currQuestion + 1);
    } else {
      setShowScore(true);
    }
  };
  console.log(currentQuestion);
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
