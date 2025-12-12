import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bg from "/images/education.png"; 

export default function Home() {
  return (
    <div className="home">
      <img src={bg} className="home-bg" alt="background" />

      <div className="home-header">
        <h1>Платформа Онлайн-Освіти</h1>
        <p>
          Навчайтеся будь-де та будь-коли. Обирайте безкоштовні курси та
          розвивайте свої навички разом з нами.
        </p>

        <Link to="/courses" className="home-btn">
          Переглянути курси
        </Link>
      </div>

      <h2 className="popular-title">Популярні курси</h2>

      <div className="course-cards">
        <Link to="/courses/1" className="course-card">
          <h3>Вступ до React</h3>
          <p>Основи сучасної фронтенд-розробки.</p>
        </Link>

        <Link to="/courses/2" className="course-card">
          <h3>Основи JavaScript</h3>
          <p>Перший крок у світ програмування.</p>
        </Link>

        <Link to="/courses/3" className="course-card">
          <h3>HTML + CSS</h3>
          <p>Створення веб-інтерфейсів з нуля.</p>
        </Link>
      </div>
    </div>
  );
}
