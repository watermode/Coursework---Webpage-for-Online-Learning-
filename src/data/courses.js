export const courseData = {
  1: {
    id: 1,
    title: "Вступ до React",
    tests: [
      {
        question: "Що таке JSX?",
        options: [
          "Розширення JavaScript для опису UI",
          "Мова програмування",
          "База даних",
          "Тип компонента в React"
        ],
        answer: 0
      },
      {
        question: "Що таке компонент?",
        options: [
          "Функція або клас, що повертає UI",
          "Змінна зі станом",
          "Файл стилів",
          "Глобальний об’єкт"
        ],
        answer: 0
      },
      {
        question: "Як змінюється стан у React?",
        options: ["Через setState/useState", "Через змінну let", "Через cookie", "Ніяк"],
        answer: 0
      },
      {
        question: "Який хук відповідає за життєвий цикл?",
        options: ["useEffect", "useWatch", "useLoop", "useStatus"],
        answer: 0
      },
      {
        question: "Що таке пропси?",
        options: ["Дані, що передаються в компонент", "Стан додатку", "Стилі", "Бібліотека"],
        answer: 0
      }
    ]
  },

  2: {
    id: 2,
    title: "Основи JavaScript",
    tests: [
      {
        question: "Який тип даних не існує в JS?",
        options: ["number", "boolean", "float", "object"],
        answer: 2
      },
      {
        question: "Що таке масив?",
        options: ["Структура для зберігання даних", "Функція", "Компонент", "Тип циклу"],
        answer: 0
      },
      {
        question: "Який метод додає елемент у кінець масиву?",
        options: ["push()", "pop()", "shift()", "add()"],
        answer: 0
      },
      {
        question: "Як оголосити змінну?",
        options: ["let", "const", "var", "усі варіанти правильні"],
        answer: 3
      },
      {
        question: "Що повертає typeof null?",
        options: ["object", "null", "undefined", "function"],
        answer: 0
      }
    ]
  }
};
