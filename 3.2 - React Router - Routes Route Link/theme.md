# 📦 Урок 3.2 - `React Router`: маршруты, маршрут, ссылка

---

## 🚀 Основная идея

После подключения React Router мы можем создавать маршруты (Route) и ссылки (Link / NavLink),
чтобы перемещаться между страницами внутри приложения — без перезагрузки.

---

## 🔹 Теория

- `<Routes>` — контейнер, внутри которого размещаются маршруты.

- `<Route>` — определяет, какой компонент показывать при определённом пути (path).

- `<Link>` — создаёт ссылку для навигации внутри приложения.

- `<NavLink>` — то же самое, но позволяет стилизовать активную ссылку.

---

## 🔹 Пример

```javascript
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export const App = () => {
  return (
    <>
      <nav className="flex gap-4">
        <Link to="/">Главная</Link>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-indigo-600 font-semibold" : "text-gray-700"
          }
        >
          О нас
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
```

> 📌 Здесь `<NavLink>` автоматически получает активный класс, если страница совпадает с `to`.

---

## 🔹 Пример навигации через компонент `Navbar`

```javascript
import { NavLink } from "react-router-dom";
import { HomeIcon, PlusIcon } from "lucide-react";

export const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center justify-center w-12 h-12 transition-colors
     text-gray-700 hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-400
     ${isActive ? "text-indigo-600 dark:text-indigo-400" : ""}`;

  return (
    <nav className="flex items-center gap-2 p-2 bg-gray-100 dark:bg-gray-900 rounded-xl">
      <NavLink to="/" className={navLinkClass}>
        <HomeIcon size={22} />
      </NavLink>

      <NavLink to="/addHabit" className={navLinkClass}>
        <PlusIcon size={22} />
      </NavLink>
    </nav>
  );
};
```

---

## 📌 на заметку

- `NavLink` — лучший вариант для навигационных панелей.
- Автоматически подсвечивает активную страницу.
- Можно легко кастомизировать стили под тёмную тему.

---

## ⚙️ Пример структуры проекта

```bash
src/
├── components/
│   ├── Navbar.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
├── App.jsx
└── main.jsx
```

---

## ⚠️ Подводные камни

| Ошибка                               | Причина                                | Решение                                         |
| ------------------------------------ | -------------------------------------- | ----------------------------------------------- |
| ❌ Ссылки не работают                | Компонент вне `BrowserRouter`          | Оберни приложение в `<BrowserRouter>`           |
| ❌ Активная ссылка не подсвечивается | Неверный путь или `end` не указан      | Проверь `path` и добавь `end` при необходимости |
| ❌ Стили сбиваются                   | Ошибки в `className` функции `NavLink` | Возвращай корректную строку из `({ isActive })` |
