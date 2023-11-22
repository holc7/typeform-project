import React from "react";
import { Card } from "ui-neumorphism";
import Lottie from "lottie-react";

const Answers = ({ answers, animationData }) => {
  return (
    <div className="answers-container">
      <Card className="answer-question-container" inset>
        <h2>RESULTS</h2>
        <ul className="ul-class">
          {Object.entries(answers).map(([questionId, answer]) => (
            <div key={questionId} className="li-container d-flex ">
              <li
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
        <Lottie
          animationData={animationData}
          style={{ position: "absolute", top: "-15%", right: "-15%" }}
        />
        <Lottie
          animationData={animationData}
          style={{ position: "absolute", top: "-15%", left: "-15%" }}
        />
      </Card>
    </div>
  );
};

export default Answers;
