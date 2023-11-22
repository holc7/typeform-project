import React from "react";
import { Divider, IconButton, Card } from "ui-neumorphism";
import { useState, useEffect } from "react";
import Answers from "./Answers";
import Lottie from "lottie-react";
import cloudAnimation from "../assets/cloud-raining.json";

const SearchField = ({
  setQuestionNumber,
  answers,
  saveAnswer,
  questionNumber,
  questions,
  showResults,
  setShowResults,
}) => {
  const [inputField, setInputField] = useState("");
  useEffect(() => {
    console.log("Updated answers state:", answers);
  }, [answers]);

  const handleChangeInput = (e) => {
    setInputField(e.target.value);
    if (inputField.trim() === "") {
      alert("Please enter a valid answer!");
    }
  };

  const goToNextQuestion = () => {
    const currentQuestionId = questions[questionNumber].id;
    saveAnswer(currentQuestionId, inputField); // Save current answer

    if (questionNumber < questions.length - 1) {
      setQuestionNumber((prev) => prev + 1);
      setInputField(answers[questions[questionNumber + 1].id] || "");
    } else {
      setShowResults(true); // Show results if it's the last question
    }
  };
  const goToPreviousQuestion = () => {
    // Assuming 'questionNumber' starts from 0 and corresponds to array indices
    if (questionNumber > 0) {
      setQuestionNumber((prev) => prev - 1);

      // Clear or update the input field for the next question
      setInputField(answers[questions[questionNumber - 1].id] || "");
    } else {
      alert("WHERE DO YOU WANT TO GO?");
    }
  };

  return (
    <div>
      {showResults ? (
        <Answers answers={answers} />
      ) : (
        <div className="full-container d-flex align-items-center">
          <div className="form-container">
            <form
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                onChange={handleChangeInput}
                value={inputField}
                className="search-field"
                type="text"
              />
            </form>

            <div className="button-container mt-3 col-2 d-flex">
              <IconButton
                onClick={goToPreviousQuestion}
                className="next-neuro"
                text={false}
                size="large"
                color="var(--warning)"
              >
                PREVIOUS
              </IconButton>
              <IconButton
                onClick={goToNextQuestion}
                className="previous-neuro"
                text={false}
                size="large"
                color="var(--warning)"
              >
                NEXT
              </IconButton>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchField;
