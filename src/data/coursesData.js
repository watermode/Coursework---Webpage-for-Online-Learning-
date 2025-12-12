const coursesData = {
  1: {
    id: 1,
    title: "Вступ до React",
    description: "React — одна з найпопулярніших бібліотек JavaScript.",
    lessons: [
      {
        id: 1,
        title: "Що таке React?",
        video: "https://www.youtube.com/embed/Tn6-PIqc4UM",
        content: `
React — це JavaScript бібліотека для побудови інтерфейсів.
React використовує компоненти, стан, пропси та JSX.
        `
      },
      {
        id: 2,
        title: "Компоненти та JSX",
        video: "https://www.youtube.com/embed/SqcY0GlETPk",
        content: `
JSX — розширення синтаксису JavaScript.
Компоненти — основні будівельні блоки React.
        `
      },
      {
        id: 3,
        title: "useState та useEffect",
        video: "https://www.youtube.com/embed/0ZJgIjIuY7U",
        content: `
Хуки — це новий спосіб роботи зі станом.
useState — для змінних, useEffect — для побічних ефектів.
        `
      }
    ]
  },

  2: {
    id: 2,
    title: "Основи JavaScript",
    description: "Перший крок у світ програмування.",
    lessons: [
      {
        id: 1,
        title: "Змінні та типи даних",
        video: "https://www.youtube.com/embed/W6NZfCO5SIk",
        content: `
Типи даних: string, number, boolean, object, array.
let, const — сучасні способи оголошення змінних.
        `
      },
      {
        id: 2,
        title: "Функції",
        video: "https://www.youtube.com/embed/BI1o2H9z9fo",
        content: `
Функції дозволяють повторно використовувати код.
        `
      },
      {
        id: 3,
        title: "Масиви та об'єкти",
        video: "https://www.youtube.com/embed/oigfaZ5ApsM",
        content: `
Масиви — упорядковані дані. Об'єкти — структуровані дані.
        `
      }
    ]
  },

  3: {
    id: 3,
    title: "HTML + CSS",
    description: "Створення веб-інтерфейсів з нуля.",
    lessons: [
      { id: 1, title: "Основи HTML", video: "", content: "Теги, структура документа..." },
      { id: 2, title: "Основи CSS", video: "", content: "Селектори, властивості..." },
      { id: 3, title: "Адаптивність", video: "", content: "Media queries..." }
    ]
  },

  4: {
    id: 4,
    title: "Python для початківців",
    description: "Простий старт у Python.",
    lessons: [
      { id: 1, title: "Вступ", video: "", content: "Що таке Python?" },
      { id: 2, title: "Змінні", video: "", content: "Типи даних у Python." },
      { id: 3, title: "Функції", video: "", content: "def та параметри." }
    ]
  },

  5: {
    id: 5,
    title: "UX/UI Design",
    description: "Основи дизайну інтерфейсів.",
    lessons: [
      { id: 1, title: "Що таке UX/UI?", video: "", content: "Різниця UX та UI." },
      { id: 2, title: "Прототипування", video: "", content: "Wireframes, Figma..." },
      { id: 3, title: "Стиль та композиція", video: "", content: "Візуальні принципи." }
    ]
  },
};

export default coursesData;
