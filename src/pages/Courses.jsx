import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

export default function Courses() {
  const [search, setSearch] = useState("");

  const courses = [
    { id: 1, title: "Вступ до React", description: "Основи сучасної фронтенд-розробки." },
    { id: 2, title: "Основи JavaScript", description: "Перший крок у світ програмування." },
    { id: 3, title: "HTML + CSS", description: "Створення веб-інтерфейсів з нуля." },
    { id: 4, title: "Python для початківців", description: "Простий старт у розробку на Python." },
    { id: 5, title: "UX/UI Design", description: "Основи візуального та UX проєктування." }
  ];

  const filtered = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="courses-page">
      <h1 className="courses-title">Всі курси</h1>

      <input
        type="text"
        placeholder="Пошук курсу..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="courses-grid">
        {filtered.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>

            <Link to={`/courses/${course.id}`} className="course-btn">
              Переглянути
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
