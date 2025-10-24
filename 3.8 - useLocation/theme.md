# 📦 Тема 3.8 - `useLocation`: работа с текущим URL

В этой теме мы разбираем, как получить информацию о текущем маршруте в React Router с помощью хука useLocation().

---

## 🚀 Основная идея

> 📌 useLocation() возвращает объект location, содержащий:

- `pathname` — текущий путь (например, /users/3)
- `search` — query-параметры (?sort=asc)
- `hash` — якорь (#info)
- `state` — данные, переданные при навигации

> 📌 Хук полезен, когда нужно реагировать на смену URL или получать данные из адресной строки.

---

## 🔹 Где применяется

- Создание Breadcrumbs (хлебных крошек)
- Определение активного пункта меню
- Чтение query-параметров
- Логирование переходов для аналитики

---

## 🔹 Пример кода: получение пути

### 📂 pages/CurrentPage.jsx

```javascript
import { useLocation } from "react-router-dom";

export const CurrentPage = () => {
  const location = useLocation();

  return (
    <div>
      <h2>Текущий путь:</h2>
      <p>{location.pathname}</p>
    </div>
  );
};
```

> 📌 Если перейти на /users/42, будет выведено: /users/42.

---

## 🔹 Получение query-параметров (?page=2&sort=price)

```javascript
import { useLocation } from "react-router-dom";

export const ProductList = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);

  const page = query.get("page");
  const sort = query.get("sort");

  return (
    <div>
      <p>Страница: {page}</p>
      <p>Сортировка: {sort}</p>
    </div>
  );
};
```

> 📌 `URLSearchParams` — стандартный способ читать параметры из строки.

---

## 🔹 Использование для хлебных крошек (Breadcrumbs)

### 📂 `components/Breadcrumbs.jsx`

```javascript
import { Link, useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const parts = location.pathname.split("/").filter(Boolean);

  const crumbs = parts.map((part, index) => {
    const to = "/" + parts.slice(0, index + 1).join("/");
    return { label: part, to };
  });

  return (
    <nav>
      <Link to="/">Home</Link>

      {crumbs.map((crumb, index) => (
        <span key={crumb.to}>
          {" / "}
          {index === crumbs.length - 1 ? (
            <span>{crumb.label}</span>
          ) : (
            <Link to={crumb.to}>{crumb.label}</Link>
          )}
        </span>
      ))}
    </nav>
  );
};
```

> 📌 `useLocation()` даёт путь → путь разбиваем → строим навигацию.

---

## 🔹 Что важно понять

- 🧩 `useLocation()` вызывается в компоненте, который рендерится внутри `<BrowserRouter>`.

- 🧩 Он возвращает всегда актуальное состояние URL.

- 🧩 Если путь изменился → компонент автоматически перерендерится.

---

## 💡 Полезные подсказки

| 💡 Подсказка   | Описание                                                      |
| -------------- | ------------------------------------------------------------- |
| `pathname`     | Основной путь, удобно для хлебных крошек и активных ссылок    |
| `search`       | Используй `URLSearchParams`, чтобы читать query-параметры     |
| `state`        | Полезно для передачи данных без URL (например, при переходах) |
| Автообновление | При смене пути компонент обновляется автоматически            |
