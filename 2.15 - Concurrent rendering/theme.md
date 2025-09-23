# 📦 Тема 2.15 – `Concurrent Rendering`

---

## 🚀 Основная идея

`Concurrent Rendering` — это набор новых возможностей в React 18, которые делают интерфейс отзывчивее.
React теперь может прерывать рендеринг и продолжать позже, если появились более важные задачи (например, ввод текста).

Это улучшает UX: интерфейс не "замораживается", даже если компоненты большие и тяжелые.

---

## 🔹 Основные фичи

Автоматическая батчинг-обновлений
Несколько setState внутри одного события теперь объединяются.

### `startTransition`

Разделяет обновления:

- срочные (ввод текста, клики)

- несрочные (рендеринг списка, фильтрация).

### `Suspense improvements`

Асинхронные компоненты (например, с `fetch`) можно оборачивать в `<Suspense>` и показывать `fallback`, пока грузится.

---

## 🔹 Пример с `startTransition`

```javascript
import React, { useState, startTransition } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      // Имитация тяжелого фильтра
      const filtered = bigList.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
    });
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Поиск..."
        className="border px-2 py-1 rounded"
      />
      <ul>
        {results.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
};
```

> 📌 Здесь `startTransition` говорит React: "Эти обновления не срочные, можешь подождать, если юзер что-то делает".

---

## 📌 Подсказки и пояснения

- `Concurrent Rendering` включён по умолчанию в `React 18`.

- Для совместимости код писать по-старому всё ещё можно.

- `useDeferredValue` помогает отложить обновления (например, поиск по большому списку).

- Работает только в `React 18+`.

---

## ⚠️ Подводные камни

| Проблема                        | Решение                                                     |
| ------------------------------- | ----------------------------------------------------------- |
| Лагает ввод при больших списках | Используй `startTransition` или `useDeferredValue`          |
| Трудно отлаживать               | Добавь логи с приоритетом обновлений                        |
| Старый код                      | Постепенно переписывай, React сам заботится о совместимости |
