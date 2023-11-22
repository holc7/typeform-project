import React from "react";
import {
  Card,
  CardContent,
  Subtitle2,
  H5,
  Body2,
  CardAction,
  Button,
} from "ui-neumorphism";
import { overrideThemeVariables } from "ui-neumorphism";
import "ui-neumorphism/dist/index.css";
import { Divider, IconButton } from "ui-neumorphism";
import Answers from "./Answers";

const HeadingAndQuestion = ({
  questions,
  questionNumber,
  setQuestionNumber,
  showResults,
  animationData,
}) => {
  const currentQuestion = questions[questionNumber];

  return (
    <div className="container-1">
      <div className="row">
        <div className="col-12  text-center">
          {!showResults ? (
            <h2>WELCOME TO THE QUESTIONNAIRE</h2>
          ) : (
            <h2>CONGRATULATIONS! IT IS SIMPLE!!!!!</h2>
          )}
        </div>
      </div>
      <div className="two-question-container d-flex  align-items-center">
        <div className={!showResults ? "col-3" : "col-3-none"}>
          {currentQuestion && (
            <>
              <h4 className="question-text">QUESTION {questionNumber + 1}</h4>
              <p>{currentQuestion.text}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeadingAndQuestion;
