# 📦 Тема 2.10 - Кастомный хук для работы с `localStorage`

---

## 🚀 Основная идея

> Часто нужно сохранять данные между перезагрузками страницы.
> Для этого используется `localStorage`, но писать логику каждый раз неудобно.
> Решение → сделать кастомный хук `useLocalStorage`.

---

## 🔹 Реализация

### Хук `useLocalStorage`

```javascript
import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
```

> 📌 Этот хук работает как `useState`, но данные автоматически сохраняются в `localStorage`.

### Контекст `TasksContext`

```javascript
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const addTask = (title) => {
    const task = {
      id: Date.now(),
      title,
      completed: false,
    };
    setTasks((prev) => [...prev, task]);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
};
```

---

## 🔹 Использование

```javascript
import React, { useContext } from "react";
import { TasksContext } from "./contexts/TasksContext";

export const App = () => {
  const { tasks, addTask, deleteTask } = useContext(TasksContext);

  return (
    <div>
      <button onClick={() => addTask("Новая задача")}>Добавить задачу</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.title}
            <button onClick={() => deleteTask(task.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
```

> 📌 Теперь задачи сохраняются даже после обновления страницы.

---

## 🔹 Подводные камни

- `localStorage` хранит только строки, поэтому нужен `JSON.parse` и `JSON.stringify`.
- Проверяй, что ключ key уникальный (например "tasks", "user", "theme").
- `id`: `Date.now()` удобнее, чем `new Date()`, потому что это число.
