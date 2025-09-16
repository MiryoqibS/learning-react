# 📦 Тема 2.4 - useMemo

В этой теме мы разбираем хук useMemo, который помогает оптимизировать производительность и избегать лишних пересчётов сложных вычислений.

---

## 🚀 Основные моменты

> 📌 useMemo кэширует результат функции и пересчитывает его только если изменились зависимости.

> 📌 Полезен при тяжёлых вычислениях (сортировка, фильтрация, поиск).

> 📌 Если список или вычисления маленькие — особой пользы не даст.

---

## 🔹 Пример 1. Сортировка списка

```javascript
import React, { useState, useEffect, useMemo } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const sortedTodos = useMemo(() => {
    console.log("Сортировка запущена 🚀");
    return [...todos].sort((a, b) => a.completed - b.completed);
  }, [todos]);

  return (
    <div>
      <button onClick={() => setIsSorted((prev) => !prev)}>
        {isSorted ? "Рассортировать" : "Отсортировать"}
      </button>
      <TodoList todos={isSorted ? sortedTodos : todos} />
    </div>
  );
}
```

> 📌 Здесь useMemo не даёт пересчитывать сортировку на каждый рендер, а только когда меняются todos.

---

## 🔹 Пример 2. Тяжёлые вычисления

```javascript
import React, { useState, useMemo } from "react";

function ExpensiveCalc({ num }) {
  const result = useMemo(() => {
    console.log("Вычисление...");
    let total = 0;
    for (let i = 0; i < 1000000000; i++) {
      total += num;
    }
    return total;
  }, [num]);

  return <p>Результат: {result}</p>;
}

export default ExpensiveCalc;
```

> 📌 Без useMemo такой расчёт запускался бы на каждый рендер, а с ним — только при изменении num.

---

## ⚠️ Подводные камни

- ❌ Не нужно оборачивать всё подряд в useMemo.
- ❌ Оптимизация заметна только при реально больших вычислениях или данных.
- ✅ Для маленьких списков — пользы почти нет.
