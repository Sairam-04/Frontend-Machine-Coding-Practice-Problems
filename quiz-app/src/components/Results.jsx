import React from "react";
import '../App.css'

const Results = ({ results, questionsData }) => {
  return (
    <div className="resultsdiv">
      {questionsData.map((question, index) => {
        return (
          <div
            key={index}
            data-option={results[index].isCorrect ? "Correct" : "Wrong"}
          >
            <div className="question__name">
              {question.id}. {question.question}
            </div>
            <ul className="options">
              {question.answerOptions.map((option) => {
                const isCorrect = option.isCorrect && results[index].optionSelected === option.text || !results[index].isCorrect && results[index].optionSelected !== option.text && option.isCorrect;
                const isWrong = !option.isCorrect && results[index].optionSelected === option.text;
                return (
                  <li
                    key={option.text}
                    style={{ backgroundColor: isCorrect ? 'green' : isWrong ? 'red' : '#755b5b' }}
                  >
                    {option.text}
                  </li>
                );
              })}
            </ul>
            {/* <div className="showCorrectAns">
              {

              }
            </div> */}
          </div>
        );
      })}
    </div>
  );
};

export default Results;
