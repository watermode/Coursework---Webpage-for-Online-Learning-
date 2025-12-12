import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function CourseLessons() {
  const { id } = useParams();

  const lessonsData = {
    1: [
      "Що таке React?",
      "Компоненти та JSX",
      "Props і State",
      "useState та useEffect",
      "React Router",
      "Міні-проєкт: Todo App"
    ],
    2: [
      "Змінні: var, let, const",
      "Типи даних",
      "Умови та цикли",
      "Функції та масиви",
      "DOM – взаємодія",
      "Міні-проєкт: ToDo App"
    ],
    3: [
      "HTML основи",
      "CSS селектори",
      "Flexbox",
      "Адаптивність",
      "Практика: макет"
    ],
    4: [
      "Python синтаксис",
      "Змінні та типи",
      "Умови та цикли",
      "Функції",
      "Міні-проєкт: калькулятор"
    ],
    5: [
      "Що таке UX/UI?",
      "Прототипування",
      "Компоненти та стилі",
      "Figma практика",
      "Міні-проєкт: мобільний застосунок"
    ],
  };

  const lessons = lessonsData[id];

  const savedProgress = JSON.parse(localStorage.getItem(`progress_${id}`)) || [];
  const [completed, setCompleted] = useState(savedProgress);

  useEffect(() => {
    localStorage.setItem(`progress_${id}`, JSON.stringify(completed));
  }, [completed, id]);

  const toggleLesson = (index) => {
    let newCompleted = [...completed];
    if (newCompleted.includes(index)) {
      newCompleted = newCompleted.filter((i) => i !== index);
    } else {
      newCompleted.push(index);
    }
    setCompleted(newCompleted);
  };

  const progressPercent = Math.round((completed.length / lessons.length) * 100);

  return (
    <div style={{ width: "700px", margin: "40px auto", textAlign: "center" }}>
      <Link to={`/courses/${id}`} style={{ textDecoration: "none", fontSize: "18px" }}>
        ← Назад до курсу
      </Link>

      <h1>Навчальні уроки</h1>

      <div style={{ margin: "20px 0" }}>
        <div style={{
          height: "20px",
          width: "100%",
          background: "#ddd",
          borderRadius: "10px",
          overflow: "hidden"
        }}>
          <div
            style={{
              width: `${progressPercent}%`,
              height: "100%",
              background: "#4caf50",
              transition: "0.4s"
            }}
          ></div>
        </div>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Прогрес: <strong>{progressPercent}%</strong>
        </p>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {lessons.map((lesson, index) => (
          <li
            key={index}
            onClick={() => toggleLesson(index)}
            style={{
              cursor: "pointer",
              padding: "12px 18px",
              margin: "10px 0",
              background: completed.includes(index) ? "#c8f7c5" : "#f5f5f5",
              borderRadius: "6px",
              border: "1px solid #ccc",
              textAlign: "left",
              fontSize: "18px"
            }}
          >
            {completed.includes(index) ? "✔ " : "• "} {lesson}
          </li>
        ))}
      </ul>
    </div>
  );
}
