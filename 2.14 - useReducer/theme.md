# 📦 Тема 2.14 – Хук `useReducer`

---

## 🚀 Основная идея

`useReducer` — это альтернатива `useState`, когда логика изменения состояния сложная или зависит от предыдущего состояния.
Работает по принципу (`state`, `action`) → `newState`.
Хорошо подходит для управления состоянием в форме, списках, задачах, счетчиках.

---

## 🔹 Пример кода

```javascript
import React, { useReducer } from "react";

// 1. Reducer-функция
const counterReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      return state;
  }
};

// 2. Компонент
export const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div className="flex flex-col gap-4 items-center">
      <h3 className="text-2xl">Счётчик: {state.count}</h3>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="px-3 py-1 rounded bg-green-500 text-white"
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="px-3 py-1 rounded bg-red-500 text-white"
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "reset" })}
          className="px-3 py-1 rounded bg-gray-500 text-white"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
```

> 📌 Здесь `dispatch` отправляет объект `{ type: "increment" }` → `reducer` решает, как менять состояние.

---

## 📌 Подсказки и пояснения

- `useReducer(reducer, initialState)` возвращает массив `[state, dispatch]`.

- Удобнее, чем `useState`, если:

- много состояний в одном объекте

- есть цепочки условий

- нужно централизовать обработку действий

- Можно выносить reducer в отдельный файл для чистоты кода.

---

## ⚠️ Подводные камни

| Проблема                     | Решение                                                |
| ---------------------------- | ------------------------------------------------------ |
| Reducer стал слишком большим | Делим на несколько reducer-ов и комбинируем            |
| Трудно понять action-ы       | Заводи константы для типов (например: `INCREMENT`)     |
| Логика разрослась            | Используй `useReducer` вместе с `Context` (мини Redux) |
