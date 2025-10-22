import React, { useState } from "react";
import { TodoList } from "./components/TodoList";
import { AddTodo } from "./components/AddTodo";
import { v4 as generateId } from "uuid";

function App() {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;

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
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
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
            <div className="w-14 h-7 rounded-full shadow-inner 
            transition-colors duration-300 bg-btn-light dark:bg-btn-dark">
            </div>

            <div className="w-6 h-6 absolute top-0.5 left-0.5 rounded-full bg-white shadow-md 
            transform transition-transform translate-x-0 dark:translate-x-7">
            </div>
          </button>
        </div>
      </div>
      <div className="mx-auto flex flex-col gap-3">
        <h1 className="text-4xl font-bold text-center 
        text-gray-800 dark:text-white">
          <span className="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-500 to-purple-500">
            My Todo App
          </span>
        </h1>

        <AddTodo onAdd={onAdd} />

        <TodoList
          todos={todos}
          onDelete={onDelete}
          onCheck={onCheck}
        />
      </div>
    </div>
  )
};

export default App
