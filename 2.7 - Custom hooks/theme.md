# 📦 Тема 2.7 - Кастомные хуки

---

## 🔹 Основные моменты

> 📌 Кастомный хук — это обычная JS-функция, название которой начинается с use, и которая может внутри себя использовать другие хуки (`useState`, `useEffect`, `useContext` и т.д.).

> 📌 Кастомные хуки позволяют выносить логику в отдельные функции и переиспользовать её в разных компонентах.

> 📌 Это помогает держать код чистым, читаемым и модульным.

---

## 🔹 Пример

```javascript
import { useState, useEffect } from "react";

// Кастомный хук для отслеживания ширины экрана
export function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
```

> 📌 Теперь можно использовать в любом компоненте:

```javascript
import React from "react";
import { useWindowWidth } from "./hooks/useWindowWidth";

export const App = () => {
  const width = useWindowWidth();

  return <h1>Ширина окна: {width}px</h1>;
};
```

---

## 🔹 Когда создавать кастомные хуки?

- Когда одна и та же логика повторяется в нескольких компонентах.

- Когда хочется вынести бизнес-логику из компонента, оставив там только UI.

- Когда код в компоненте становится слишком длинным и запутанным.

---

## ⚠️ Подводные камни

> ❌ Нельзя вызывать хуки в условиях или циклах (правила такие же, как для встроенных хуков).

> ❌ Нельзя вызывать кастомный хук за пределами React-компонентов.

> ⚠️ Название обязательно должно начинаться с use, иначе React не распознает его как хук.
