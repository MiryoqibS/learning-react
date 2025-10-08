# 📦 Урок 3.3 - Link и NavLink: стилизация и активное состояние

---

## 🚀 Основная идея

В `React Router` есть два компонента для навигации —
Link и NavLink.
Они позволяют перемещаться между страницами без перезагрузки и стилизовать активную ссылку.

---

## 🔹 Разница между `Link` и `NavLink`

| Компонент | Назначение                             | Особенность                                                     |
| --------- | -------------------------------------- | --------------------------------------------------------------- |
| `Link`    | Простая навигация по маршрутам         | Не знает, активен он или нет                                    |
| `NavLink` | Навигация с подсветкой активной ссылки | Автоматически добавляет класс `active` или даёт флаг `isActive` |

```javascript
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex gap-4">
      <Link to="/" className="text-gray-700 hover:text-indigo-600">
        Главная
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-indigo-600">
        О нас
      </Link>
    </nav>
  );
};
```

> 📌 Link работает как <a></a>, но не перезагружает страницу.

---

## 🔹 Пример с `NavLink`

```javascript
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const navClass = ({ isActive }) =>
    `text-gray-700 font-medium transition-colors duration-200
     ${isActive ? "text-indigo-600" : "hover:text-indigo-400"}`;

  return (
    <nav className="flex gap-4">
      <NavLink to="/" className={navClass}>
        Главная
      </NavLink>
      <NavLink to="/about" className={navClass}>
        О нас
      </NavLink>
      <NavLink to="/contact" className={navClass}>
        Контакты
      </NavLink>
    </nav>
  );
};
```

---

## 📌 Пояснение:

- Функция в className получает объект { isActive }.
- Если isActive === true, можно менять стиль активной ссылки.

---

## 🔹 Пример — адаптивная навигация

```javascript
import { NavLink } from "react-router-dom";
import { HomeIcon, InfoIcon } from "lucide-react";

export const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-1 px-3 py-2 rounded-full transition-colors
     ${
       isActive
         ? "bg-indigo-100 text-indigo-700"
         : "text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
     }`;

  return (
    <nav className="flex gap-3 bg-white dark:bg-gray-900 p-3 rounded-xl shadow-md">
      <NavLink to="/" className={navLinkClass}>
        <HomeIcon size={18} /> Home
      </NavLink>
      <NavLink to="/about" className={navLinkClass}>
        <InfoIcon size={18} /> About
      </NavLink>
    </nav>
  );
};
```

---

## ⚙️ Подсказки

### 📌 Чтобы NavLink не подсвечивал подстраницы, добавь атрибут end:

```javascript
<NavLink to="/" end className={navClass}>
  Главная
</NavLink>
```

### 📌 Можно задать активный класс вручную:

```javascript
<NavLink to="/about" className="nav-item" activeClassName="active">
  About
</NavLink>
```

> (в React `Router v6` это заменено на функцию className={({isActive}) => ...})

---

## ⚠️ Подводные камни

| Ошибка                               | Причина                               | Решение                                 |
| ------------------------------------ | ------------------------------------- | --------------------------------------- |
| ❌ Активная ссылка не подсвечивается | Не указан `end` для главной страницы  | Добавь `end`                            |
| ❌ Стиль не меняется                 | `className` — строка, а не функция    | Передай функцию `({ isActive }) => ...` |
| ❌ `Link` перезагружает страницу     | Используется `<a href>` вместо `Link` | Замени `<a>` на `<Link>`                |
