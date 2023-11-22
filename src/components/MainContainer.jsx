import React from "react";
import HeadingAndQuestion from "./HeadingAndQuestion";
import SearchField from "./SearchField";
import { Button, Card } from "ui-neumorphism";
import { useState } from "react";
import Answers from "./Answers";

const MainContainer = ({ animationData }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleResult = () => {
    setShowResults(true);
  };

  const saveAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleAnswer = (questionId, answer) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const questions = [
    {
      id: 1,
      text: "What is your name?",
    },
    {
      id: 2,
      text: "How old are you?",
    },
    {
      id: 3,
      text: "Where are you from?",
    },
  ];

  return (
    <>
      {" "}
      <Card bordered>
        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="second-container col-12 col-md-12 col-lg-12">
              <HeadingAndQuestion
                questionNumber={questionNumber}
                questions={questions}
                setQuestionNumber={setQuestionNumber}
                showResults={showResults}
                animationData={animationData}
              />
              <SearchField
                setQuestionNumber={setQuestionNumber}
                answers={answers}
                saveAnswer={saveAnswer}
                questionNumber={questionNumber}
                questions={questions}
                showResults={showResults}
                setShowResults={setShowResults}
              />
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default MainContainer;
