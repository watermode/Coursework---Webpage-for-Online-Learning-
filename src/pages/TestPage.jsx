// src/pages/TestPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../styles.css";

export default function TestPage() {
  const { id } = useParams();

  // ВОПРОСЫ ДЛЯ КАЖДОГО КУРСА
  const tests = {
    1: [
      {
        question: "let — це?",
        options: [
          { text: "Стала змінна", correct: false },
          { text: "Змінна з блочною областю", correct: true },
          { text: "Глобальна змінна", correct: false },
          { text: "Тип даних", correct: false },
        ],
      },
      {
        question: "Що таке JSX?",
        options: [
          { text: "Розширення для JSON", correct: false },
          { text: "Синтаксис для опису UI в React", correct: true },
          { text: "Формат стилів", correct: false },
          { text: "Окремий фреймворк", correct: false },
        ],
      },
      {
        question: "Що робить useState?",
        options: [
          { text: "Описує стилі компонента", correct: false },
          { text: "Повертає стан і функцію для його зміни", correct: true },
          { text: "Викликає API", correct: false },
          { text: "Створює роутер", correct: false },
        ],
      },
      {
        question: "Пропси в React — це…",
        options: [
          { text: "Стан компонента", correct: false },
          { text: "Вхідні дані, які передаються в компонент", correct: true },
          { text: "Глобальні змінні", correct: false },
          { text: "CSS-класи", correct: false },
        ],
      },
      {
        question: "React Router потрібен для…",
        options: [
          { text: "Роботи з формами", correct: false },
          { text: "Керування навігацією між сторінками", correct: true },
          { text: "Відмальовки стилів", correct: false },
          { text: "Роботи з БД", correct: false },
        ],
      },
    ],

    2: [
      {
        question: "let — це?",
        options: [
          { text: "Стала змінна", correct: false },
          { text: "Змінна з блочною областю видимості", correct: true },
          { text: "Глобальна змінна", correct: false },
          { text: "Тип даних", correct: false },
        ],
      },
      {
        question: "Що повертає typeof null?",
        options: [
          { text: "null", correct: false },
          { text: "object", correct: true },
          { text: "undefined", correct: false },
          { text: "number", correct: false },
        ],
      },
      {
        question: "Який цикл існує?",
        options: [
          { text: "repeat", correct: false },
          { text: "loop", correct: false },
          { text: "for", correct: true },
          { text: "iterate", correct: false },
        ],
      },
      {
        question: "Що таке масив?",
        options: [
          { text: "Пара ключ-значення", correct: false },
          { text: "Упорядкована колекція елементів", correct: true },
          { text: "Функція", correct: false },
          { text: "Об’єкт помилки", correct: false },
        ],
      },
      {
        question: "Який метод масиву змінює вихідний масив?",
        options: [
          { text: "map", correct: false },
          { text: "filter", correct: false },
          { text: "push", correct: true },
          { text: "slice", correct: false },
        ],
      },
    ],

    3: [
      {
        question: "Що таке HTML?",
        options: [
          { text: "Мова стилів", correct: false },
          { text: "Мова розмітки гіпертексту", correct: true },
          { text: "Мова програмування", correct: false },
          { text: "Бібліотека", correct: false },
        ],
      },
      {
        question: "<div> — це…",
        options: [
          { text: "Блоковий елемент", correct: true },
          { text: "Рядковий елемент", correct: false },
          { text: "Коментар", correct: false },
          { text: "Тег для зображення", correct: false },
        ],
      },
      {
        question: "Яка властивість відповідає за колір тексту в CSS?",
        options: [
          { text: "background-color", correct: false },
          { text: "color", correct: true },
          { text: "font-style", correct: false },
          { text: "border-color", correct: false },
        ],
      },
      {
        question: "Що таке Flexbox?",
        options: [
          { text: "Система сітки", correct: false },
          { text: "Модель для гнучкого розміщення елементів", correct: true },
          { text: "Тип шрифта", correct: false },
          { text: "Тип зображення", correct: false },
        ],
      },
      {
        question: "За що відповідає media-query?",
        options: [
          { text: "Підключення шрифтів", correct: false },
          { text: "Адаптивну верстку під різні екрани", correct: true },
          { text: "Кешування", correct: false },
          { text: "Оптимізацію зображень", correct: false },
        ],
      },
    ],

    4: [
      {
        question: "Python — це…",
        options: [
          { text: "Мова розмітки", correct: false },
          { text: "Інтерпретована мова програмування", correct: true },
          { text: "Бібліотека JavaScript", correct: false },
          { text: "СУБД", correct: false },
        ],
      },
      {
        question: "Як оголосити змінну?",
        options: [
          { text: "let x", correct: false },
          { text: "var x", correct: false },
          { text: "x = 10", correct: true },
          { text: "const x", correct: false },
        ],
      },
      {
        question: "Як створити список?",
        options: [
          { text: "{1, 2, 3}", correct: false },
          { text: "[1, 2, 3]", correct: true },
          { text: "(1, 2, 3)", correct: false },
          { text: "<1, 2, 3>", correct: false },
        ],
      },
      {
        question: "Що таке функція в Python?",
        options: [
          { text: "Клас", correct: false },
          { text: "Блок коду, який можна викликати", correct: true },
          { text: "Модуль", correct: false },
          { text: "Пакет", correct: false },
        ],
      },
      {
        question: "Як відкрити файл для читання?",
        options: [
          { text: "open('file.txt', 'r')", correct: true },
          { text: "open('file.txt', 'w')", correct: false },
          { text: "read('file.txt')", correct: false },
          { text: "file.open()", correct: false },
        ],
      },
    ],

    5: [
      {
        question: "UX — це…",
        options: [
          { text: "Візуальний стиль сайту", correct: false },
          { text: "Досвід взаємодії користувача з продуктом", correct: true },
          { text: "Тип шрифта", correct: false },
          { text: "Колірна схема", correct: false },
        ],
      },
      {
        question: "UI — це…",
        options: [
          { text: "Архітектура БД", correct: false },
          { text: "Інтерфейс, з яким взаємодіє користувач", correct: true },
          { text: "Поведінка сервера", correct: false },
          { text: "API-документація", correct: false },
        ],
      },
      {
        question: "Який інструмент найчастіше використовують для дизайну інтерфейсів?",
        options: [
          { text: "Figma", correct: true },
          { text: "Excel", correct: false },
          { text: "Word", correct: false },
          { text: "Paint", correct: false },
        ],
      },
      {
        question: "Прототип — це…",
        options: [
          { text: "Кінцевий дизайн", correct: false },
          { text: "Чорновий, швидкий макет інтерфейсу", correct: true },
          { text: "Тестова версія бекенду", correct: false },
          { text: "Набір шрифтів", correct: false },
        ],
      },
      {
        question: "Дизайн-система — це…",
        options: [
          { text: "Набір випадкових стилів", correct: false },
          { text: "Єдиний набір правил, компонентів і стилів для продукту", correct: true },
          { text: "Список шрифтів", correct: false },
          { text: "Гайд по верстці", correct: false },
        ],
      },
    ],
  };

  const questions = tests[id];

  // Хуки ВСЕГДА на верхнем уровне
  const [current, setCurrent] = useState(0); // номер вопроса
  const [selected, setSelected] = useState([]); // [{index, correct}]
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  // Если теста для такого курса нет
  if (!questions) {
    return (
      <div className="test-container">
        <h1>Тест для цього курсу ще не додано 😢</h1>
        <Link to={`/courses/${id}`} className="start-btn">
          Повернутися до курсу
        </Link>
      </div>
    );
  }

  const handleAnswer = (isCorrect, optionIndex) => {
    // Не даём менять ответ, если уже выбрали
    if (selected[current]) return;

    setSelected((prev) => {
      const copy = [...prev];
      copy[current] = { index: optionIndex, correct: isCorrect };
      return copy;
    });

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (current === questions.length - 1) {
      setFinished(true);
    } else {
      setCurrent((prev) => prev + 1);
    }
  };

  const currentQuestion = questions[current];
  const selectedForCurrent = selected[current];

  return (
    <div className="test-container">
      <Link to={`/courses/${id}`} className="back-link">
        ← Назад до курсу
      </Link>

      <h1 className="course-title">📝 Тест</h1>

      {!finished ? (
        <>
          <div className="question-card">
            <h2 className="question-title">
              {current + 1}. {currentQuestion.question}
            </h2>

            <div className="answers-list">
              {currentQuestion.options.map((option, i) => {
                let className = "answer-btn";
                if (selectedForCurrent) {
                  if (selectedForCurrent.index === i) {
                    className += selectedForCurrent.correct
                      ? " answer-correct"
                      : " answer-wrong";
                  }
                }

                return (
                  <button
                    key={i}
                    className={className}
                    onClick={() => handleAnswer(option.correct, i)}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            className="next-btn"
            onClick={handleNext}
            disabled={!selectedForCurrent}
          >
            {current === questions.length - 1 ? "Завершити тест" : "Далі"}
          </button>
        </>
      ) : (
        <div className="result-box">
          <h2>
            Результат: {score} / {questions.length}
          </h2>
          <p>
            {score === questions.length
              ? "Чудово! Ти відповів на всі питання правильно 👏"
              : "Добре! Можеш пройти курс ще раз і повернутися до тесту 😉"}
          </p>

          <Link to={`/courses/${id}`} className="start-btn">
            Повернутися до курсу
          </Link>
        </div>
      )}
    </div>
  );
}
