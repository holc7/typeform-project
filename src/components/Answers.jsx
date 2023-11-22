import React from "react";
import { Card } from "ui-neumorphism";
import Lottie from "lottie-react";

const Answers = ({ answers }) => {
  return (
    <div className="answers-container">
      <Card className="answer-question-container" inset>
        <h2>RESULTS</h2>
        <ul className="ul-class">
          {Object.entries(answers).map(([questionId, answer]) => (
            <div className="li-container d-flex ">
              <li
                key={questionId}
                style={{
                  textAlign: "left",
                  listStyle: "none",
                  fontSize: "1.5rem",
                }}
              >
                Question {questionId}: {answer}
              </li>
            </div>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Answers;
