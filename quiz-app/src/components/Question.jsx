import React from "react";

const Question = ({ question, nextQuestion }) => {
  return (
    <>
      <div className="question__name">
        {question.id}. {question.question}
      </div>
      <ul className="options">
        {question.answerOptions.map((option) => {
          return (
            <li
              key={option.text}
              onClick={() => nextQuestion(question.id, option.isCorrect, option.text)}
            >
              {option.text}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Question;
