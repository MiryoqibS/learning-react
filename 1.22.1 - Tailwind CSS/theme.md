# 📦 Тема 1.22.1 - Tailwind V4 [Часть 1]

---

> В этой теме мы учимся использовать **Tailwind CSS v4** вместе с **React**.  
> В новой версии Tailwind многие шаги упростились:
>
> - нет отдельного `tailwind.config.js` по умолчанию
> - утилиты работают из коробки
> - поддержка `line-clamp`, `aspect-ratio` и других фич встроена сразу

---

## ⚙️ Установка Tailwind v4 в React (Vite)

```bash
npm install tailwindcss
```

### Создаём файл стилей (например, src/index.css) и подключаем Tailwind:

```javascript
@import "tailwindcss";
```

### А в main.jsx импортируем index.css:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
```

> ✅ Всё, `Tailwind` готов — без лишних конфигов.

---

## 🔹 Использование в компонентах

```javascript
export const Button = () => {
  return (
    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
      Нажми меня
    </button>
  );
};
```

> 📌 Все стили задаются прямо в className.

> 📌 В v4 есть встроенный line-clamp → можно писать line-clamp-3 без плагинов.

---

## 🔹 Адаптивность

### `Tailwind v4` сразу поддерживает брейкпоинты:

```javascript
<p className="text-sm sm:text-base md:text-lg lg:text-xl">Адаптивный текст</p>
```

---

## ⚠️ Подводные камни

> ✅ Всё работает без конфига, но при желании можно создать.

> ❌ Пытаться искать tailwind.config.js в v4 → его по умолчанию нет.

> ❌ Использовать postcss autoprefixer → в v4 это больше не нужно.

> ❌ Ставить плагины для line-clamp или aspect-ratio → в v4 они встроены.
