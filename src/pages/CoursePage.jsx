// src/pages/CoursePage.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles.css";

export default function CoursePage() {
  const { id } = useParams();

  // Данные всех курсов
  const courseData = {
    1: {
      title: "Вступ до React",
      description:
        "React — це популярна бібліотека JavaScript для створення сучасних інтерфейсів...",
      video: "https://www.youtube.com/embed/Tn6-PIqc4UM",
      content: [
        "Що таке React?",
        "Компоненти та JSX",
        "Пропси та стан",
        "Хуки: useState, useEffect",
        "React Router",
        "Проєкт: створення власного застосунку",
      ],
      materials: [
        { name: "React — шпаргалка.pdf", url: "/files/react/React - шпаргалка.pdf" },
        { name: "Стартовий проєкт.zip", url: "/files/react/Стартовий_проект.zip" },
        { name: "Презентація уроку.pptx", url: "/files/react/Призентація уроку.pptx" },
      ],
    },

    2: {
      title: "Основи JavaScript",
      description: "JavaScript — основна мова веб-розробки...",
      video: "https://www.youtube.com/embed/PkZNo7MFNFg",
      content: [
        "Змінні та типи даних",
        "Умови та цикли",
        "Функції",
        "Масиви",
        "DOM",
        "Проєкт: To-Do App",
      ],
      materials: [
        { name: "JS — шпаргалка.pdf", url: "/files/js/JS-шпаргалка.pdf" },
        { name: "Практичні задачі.pdf", url: "/files/js/Практичні задачі.pdf" },
      ],
    },

    3: {
      title: "HTML + CSS",
      description: "Цей курс навчить створювати адаптивні інтерфейси...",
      video: "https://www.youtube.com/embed/mU6anWqZJcc",
      content: [
        "Основи HTML",
        "Основи CSS",
        "Flexbox",
        "CSS Grid",
        "Адаптивність",
        "Практика",
      ],
      materials: [
        { name: "HTML шпаргалка.pdf", url: "/files/html/HTML шпаргалка.pdf" },
        { name: "CSS шпаргалка.pdf", url: "/files/html/CSS шпаргалка.pdf" },
        { name: "Макет сайту.png", url: "/files/html/Макет сайту.png" },
      ],
    },

    4: {
      title: "Python для початківців",
      description: "Python — проста та потужна мова...",
      video: "https://www.youtube.com/embed/rfscVS0vtbw",
      content: ["Типи даних", "Умови", "Цикли", "Функції", "Робота з файлами", "Проєкт"],
      materials: [
        { name: "Python шпаргалка.pdf", url: "/files/python/Python шпаргалка.pdf" },
        { name: "Завдання до курсу.pdf", url: "/files/python/Завдання до курсу.pdf" },
      ],
    },

    5: {
      title: "UX/UI Design",
      description: "Дизайн інтерфейсів — популярний напрям...",
      video: "https://www.youtube.com/embed/FTFaQWZBqQ8",
      content: [
        "Що таке UX/UI",
        "Дослідження",
        "Прототипування",
        "Figma",
        "Компоненти",
        "Практика",
      ],
      materials: [
        { name: "UX шпаргалка.pdf", url: "/files/uxui/UX шпаргалка.pdf" },
        { name: "UI гайди.pdf", url: "/files/uxui/UI гайди.pdf" },
      ],
    },
  };

  const course = courseData[id];

  if (!course) {
    return <h1 style={{ textAlign: "center", padding: "50px" }}>Курс не знайдено 😢</h1>;
  }

  return (
    <div className="course-page-bg">
      <div className="course-container">

        <Link to="/courses" className="back-link">← Назад до курсів</Link>

        <h1 className="course-title">{course.title}</h1>
        <p className="course-description">{course.description}</p>

        {/* Зміст курсу */}
        <h2 className="section-title">📘 Зміст курсу</h2>
        <ul className="course-list">
          {course.content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Відеоурок */}
        <h2 className="section-title">🎥 Відеоурок</h2>
        <div className="video-wrapper">
          <iframe
            src={course.video}
            title={course.title}
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </div>

        {/* Кнопки */}
        <Link to={`/courses/${id}/lessons`} className="start-btn">➤ Прогрес навчання</Link>
        <Link to={`/courses/${id}/test`} className="test-btn">📝 Пройти тест</Link>

        <h2 className="section-title materials-title">
         📂 Навчальні матеріали для завантаження 
        <span className="materials-hint"></span>
        </h2>


        <div className="materials-list">
          {course.materials.map((file, index) => (
            <a key={index} href={file.url} download className="material-item">
              📄 {file.name}
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
