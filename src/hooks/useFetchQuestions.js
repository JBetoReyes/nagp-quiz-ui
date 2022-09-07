import { useEffect, useState } from 'react';

export const useFetchQuestions = () => {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch('/quizzes');
      const questionsResponse = await res.json();
      setQuestions(questionsResponse);
    })();
  }, []);
  return [questions];
};
