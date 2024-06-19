import { useEffect, useState } from "react";
import questionsData from "./data/questions.json";
import "./App.css";
import Question from "./components/Question";
import Results from "./components/Results";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results, setResults] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const submitAnswers = (id, isCorrect, optionSelected) => {
    setResults([...results, { id: id, isCorrect: isCorrect, optionSelected:optionSelected }]);
  };
  const handleNextQuestion = (id, isCorrect, optionSelected) => {
    submitAnswers(id, isCorrect, optionSelected);
    if (questionIndex === questionsData.length - 1) {
      setIsSubmit(true);
    } else {
      setQuestionIndex(questionIndex + 1);
    }
  };
  const handlePreviousQuestion = () => {
    setQuestionIndex(questionIndex - 1);
  };

  const calculateScore = () =>{
    let score = 0;
    results.forEach((ele)=>{
      if(ele.isCorrect){
        score+=1
      }
    })
    return score;
  }

  return (
    <div className="main">
      <h2>MCQ's Quiz Test (10 Questions)</h2>
      {
        isSubmit && (
          <h2>
            You Answered {calculateScore()} out of 10 Correct!!! 
          </h2>
        )
      }
      {!isSubmit ? (
        <div className="questions">
          {questionIndex !== questionsData.length  && (
            <Question
              question={questionsData[questionIndex]}
              nextQuestion={handleNextQuestion}
            />
          )}
          <div className="buttons">
            {questionIndex !== 0 && (
              <button onClick={() => handlePreviousQuestion()}>Previous</button>
            )}
            <button onClick={() => handleNextQuestion()}>
              {questionIndex >= questionsData.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      ) : (
        <Results results={results} questionsData={questionsData} />
      )}
    </div>
  );
}

export default App;
