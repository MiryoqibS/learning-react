# 📦 Тема 1.23 - Список Задач (практика)

В этой теме мы создаём приложение Todo App с поддержкой добавления, удаления, отметки задач и переключением темы (светлая/тёмная).

---

## 🚀 Основные возможности

> 📌 Добавление новой задачи (валидация: минимум 5 символов)

> 📌 Удаление задачи

> 📌 Отметка задачи как выполненной (line-through)

> 📌 Сохранение темы (light/dark) в localStorage

> 📌 Автоматическое определение темы (по системным настройкам и времени суток)

> 📌 UI на TailwindCSS + lucide-react

---

## 🔹 Установка и запуск

```bash
npm install
npm run dev
```

---

## 🔹 Основной код

### App.js

```javascript
import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { v4 as generateId } from "uuid";

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme:dark)"
    ).matches;

    if (savedTheme) return savedTheme;
    if (prefersDark) return "dark";

    const hours = new Date().getHours();
    return hours < 6 || hours >= 21 ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme());

  // Изменения темы
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  const initialTodos = [
    { id: 1, text: "Выучить Реакт", isChecked: false },
    { id: 2, text: "Сделать отжимания", isChecked: false },
    { id: 3, text: "Выйти на пробежку", isChecked: true },
    { id: 4, text: "Пресс качать", isChecked: false },
  ];

  const [todos, setTodos] = useState(initialTodos);

  // Добавление задачи
  const onAdd = (text) => {
    const newTodo = {
      id: generateId(),
      text,
      isChecked: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  // Удаление задачи
  const onDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Отметить задачу как выполненная
  const onCheck = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <div
      className="flex flex-col min-h-screen justify-center items-center p-6 
        bg-page-light dark:bg-page-dark"
      data-theme={theme}
    >
      <div className="mb-6">
        <div className="flex items-center cursor-pointer">
          <button className="relative" onClick={toggleTheme}>
            <div
              className="w-14 h-7 rounded-full shadow-inner 
            transition-colors duration-300 bg-btn-light dark:bg-btn-dark"
            ></div>

            <div
              className="w-6 h-6 absolute top-0.5 left-0.5 rounded-full bg-white shadow-md 
            transform transition-transform translate-x-0 dark:translate-x-7"
            ></div>
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h1
          className="text-4xl font-bold text-center 
        text-gray-800 dark:text-white"
        >
          <span
            className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 to-purple-500"
          >
            My Todo App
          </span>
        </h1>

        <AddTodo onAdd={onAdd} />

        <TodoList todos={todos} onDelete={onDelete} onCheck={onCheck} />
      </div>
    </div>
  );
}

export default App;
```

### AddTodo.jsx

```javascript
import React, { useState } from "react";
import { PlusIcon } from "lucide-react";

export const AddTodo = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length < 5) {
      console.log("длина текста задачи меньше чем 5 символов!");
      return;
    }
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div
        className="flex items-stretch bg-white rounded-lg shadow-sm 
            overflow-hidden border border-gray-100 
            focus-within:ring-2 focus-within:ring-blue-500"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Задача..."
          className="flex-1 p-3 text-gray-700 
                    dark:bg-page-dark dark:text-text-dark outline-none placeholder-gray-400"
        />

        <button
          type="submit"
          className="flex items-center justify-center cursor-pointer px-2
                    text-white
                    bg-btn-light hover:bg-btn-light-hover 
                    dark:bg-btn-dark dark:hover:bg-btn-dark-hover
                    transition-colors duration-300"
        >
          <PlusIcon size={24} />
        </button>
      </div>
    </form>
  );
};
```

### TodoList.jsx

```javascript
import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDelete, onCheck }) => {
  return (
    <div className="flex flex-col gap-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          onDelete={onDelete}
          todo={todo}
          onCheck={onCheck}
        />
      ))}
    </div>
  );
};
```

### TodoItem.jsx

```javascript
import React from "react";
import { CheckIcon, TrashIcon } from "lucide-react";

export const TodoItem = ({ todo, onDelete, onCheck }) => {
  const { id, text, isChecked } = todo;

  return (
    <div
      className="group flex items-center justify-between gap-3 p-4 bg-white dark:bg-page-dark rounded-lg h-12 shadow-sm
        hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onCheck(id)}
          className={`p-1 rounded-full border-2 ${
            isChecked
              ? "border-green-600 bg-green-500 text-white"
              : "border-gray-300 hover:border-gray-400 dark:text-white"
          }
                    transition-colors duration-300`}
        >
          <CheckIcon size={16} />
        </button>
        <p
          className={`${
            isChecked ? "line-through" : ""
          } text-text-light dark:text-text-dark`}
        >
          {text}
        </p>
      </div>
      <button
        onClick={() => onDelete(id)}
        className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 
                    transition-all duration-300 cursor-pointer"
      >
        <TrashIcon size={16} />
      </button>
    </div>
  );
};
```

---

## 📂 Структура проекта

- `App.js` — управление темой и состоянием списка
- `AddTodo.jsx` — форма добавления задачи
- `TodoList.jsx` — рендер списка
- `TodoItem.jsx` — отдельная задача с кнопками
