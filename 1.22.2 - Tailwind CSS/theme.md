# 📦 Тема 1.22.2 - Tailwind V4 [Часть 2]

В этой теме продолжаем работу с Tailwind v4 и изучаем:

- подключение кастомных шрифтов
- сброс стилей (preflight) и глобальные стили
- кастомные брейкпоинты
- анимации

---

## 🔹 Подключение кастомных шрифтов

```javascript
// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
    },
  },
}
```

> 📌 Использование в компонентах:

> className="font-inter text-lg"

---

## 🔹 Сброс стилей и глобальные стили

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Глобальные стили */
body {
  @apply bg-gray-100 text-gray-800;
}
```

> 📌 Tailwind подключает preflight — базовый сброс стилей браузера.

> Можно дополнять свои глобальные стили через @layer base.

---

## 🔹 Кастомные брейкпоинты

```javascript
// tailwind.config.js
theme: {
  screens: {
    sm: "480px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
    "3xl": "1920px", // кастомный
  },
}
```

> 📌 Теперь доступны новые брейкпоинты:

> className="text-sm md:text-base 3xl:text-2xl"

---

## 🔹 Анимации

```javascript
// tailwind.config.js
theme: {
  extend: {
    animation: {
      spinSlow: "spin 3s linear infinite",
      fadeIn: "fadeIn 1s ease-in forwards",
    },
    keyframes: {
      fadeIn: {
        "0%": { opacity: 0 },
        "100%": { opacity: 1 },
      },
    },
  },
}
```

> 📌 Применение в компонентах:

> className="animate-fadeIn"

---

## 📂 Структура проекта

- `tailwind.config.js` — кастомизация шрифтов, брейкпоинтов, анимаций
- `globals.css` — сброс стилей и глобальные стили
- `App.js` / компоненты — используют Tailwind с кастомными настройками

---

## ⚠️ Подводные камни

| Ошибка                              | Решение                                                             |
| ----------------------------------- | ------------------------------------------------------------------- |
| Шрифты не применяются               | Проверить подключение через `@import` в CSS или через `link` в HTML |
| Анимация не работает                | Убедиться, что ключевые кадры определены и используем `animate-имя` |
| Кастомный брейкпоинт не срабатывает | Проверить правильность имени в `theme.screens` и порядок классов    |
