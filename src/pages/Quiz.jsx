import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles.css";

import { courseData } from "../data/courses";

export default function Quiz() {
  const { id } = useParams();
  const navigate = useNavigate();

  const course = courseData[id];
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = course.tests[current];

  function submitAnswer() {
    if (selected === question.answer) setScore(score + 1);

    if (current + 1 === course.tests.length) {
      setFinished(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="quiz-container">
      <h1>Тест: {course.title}</h1>

      {!finished ? (
        <>
          <h2>{question.question}</h2>

          <div className="options-box">
            {question.options.map((opt, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selected === index ? "selected" : ""
                }`}
                onClick={() => setSelected(index)}
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            className="quiz-next-btn"
            disabled={selected === null}
            onClick={submitAnswer}
          >
            Ответить
          </button>

          <p>
            Вопрос {current + 1}/{course.tests.length}
          </p>
        </>
      ) : (
        <>
          <h2>Результат: {score} из {course.tests.length}</h2>

          <button className="quiz-restart-btn" onClick={restart}>
            Пройти снова
          </button>

          <button
            className="quiz-home-btn"
            onClick={() => navigate(`/courses/${id}`)}
          >
            Вернуться к курсу
          </button>
        </>
      )}
    </div>
  );
}
