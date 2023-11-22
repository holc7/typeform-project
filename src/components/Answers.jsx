import React from "react";
import { Card } from "ui-neumorphism";

const Answers = ({ answers }) => {
  return (
    <div className="answers-container">
      <Card className="answer-question-container" inset>
        <h2>Your Answers</h2>
        <ul>
          {Object.entries(answers).map(([questionId, answer]) => (
            <li
              key={questionId}
              style={{
                textAlign: "center",
                listStyle: "none",
                fontSize: "1.5rem",
              }}
            >
              Question {questionId}: {answer}
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default Answers;
