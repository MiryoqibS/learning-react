# 📦 Тема 2.6 - useContext

В этой теме мы разбираем хук useContext, который позволяет получать данные из контекста напрямую, без необходимости пробрасывать пропсы через много уровней компонентов.

---

## 🚀 Основные моменты

> 📌 `createContext(defaultValue)` создаёт объект контекста.

> 📌 `Context.Provider` оборачивает компоненты и отдаёт им данные через value.

> 📌 `useContext(Context)` возвращает текущее значение контекста.

---

## 🔹 Пример Без `useContext`

```javascript
import React, { useState } from "react";

function Header({ theme }) {
  return <h1>Текущая тема: {theme}</h1>;
}

export function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} />
    </div>
  );
}
```

> 📌 Здесь theme нужно передавать через пропсы. Если компонентов будет много уровней — код станет неудобным.

---

## 🔹 Пример С `useContext`

```javascript
// ThemeContext.js
import { createContext, useState } from "react";

export const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

```javascript
// Header.jsx
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Текущая тема: {theme}</h1>
      <button onClick={toggleTheme}>Сменить тему</button>
    </header>
  );
}
```

```javascript
// App.jsx
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
```

> 📌 Теперь `Header` получает тему напрямую из контекста, без пропсов сверху вниз.

---

## ⚠️ Подводные камни

- ❌ Если вызвать `useContext` вне `Provider`, вернётся `null` или `undefined`.
- ❌ Каждый ререндер `Provider` перерендерит всех потомков, которые используют этот контекст.
- ✅ Хорошая практика — хранить контексты в отдельных файлах.
