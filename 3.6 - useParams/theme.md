# 📦 Тема 3.6 - `useParams`: получение параметров из URL

В этой теме мы разбираем, как получать параметры из адресной строки (URL) в React Router с помощью хука useParams().

---

## 🚀 Основная идея

> 📌 `useParams()` — это хук, который возвращает объект со всеми параметрами текущего маршрута.
> 📌 С его помощью можно динамически отображать данные, основываясь на части URL (например, id пользователя, номер поста и т.д.).

---

## 🔹 Когда использовать

`useParams()` нужен, если ты создаёшь динамические маршруты, например:

- `/users/:id`
- `/posts/:postId`
- `/products/:productId`

> 📌 В таких маршрутах двоеточие (:) обозначает динамическую часть пути.

---

## 🔹 Пример структуры проекта

```javascript
src/
├── pages/
│   ├── Users.jsx
│   └── UserDetail.jsx
├── App.jsx
└── main.jsx
```

---

## 🔹 Пример кода с useParams()

### 📂 App.jsx

```javascript
import { Routes, Route } from "react-router-dom";
import { Users } from "./pages/Users";
import { UserDetail } from "./pages/UserDetail";

export const App = () => {
  return (
    <Routes>
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
};
```

> 📌 Второй маршрут содержит динамический параметр :id, который можно получить в компоненте UserDetail.

### 📂 pages/UserDetail.jsx

```javascript
import { useParams } from "react-router-dom";

export const UserDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Профиль пользователя</h2>
      <p>Вы открыли пользователя с ID: {id}</p>
    </div>
  );
};
```

> 📌 `useParams()` вернёт объект вроде `{ id: "3" }`, если ты перешёл по адресу `/users/3`.

---

## 🔹 Ещё пример: несколько параметров

```javascript
<Route path="/users/:userId/posts/:postId" element={<UserPost />} />
```

```javascript
import { useParams } from "react-router-dom";

export const UserPost = () => {
  const { userId, postId } = useParams();

  return (
    <div>
      <h2>
        Пост {postId} пользователя {userId}
      </h2>
    </div>
  );
};
```

> 📌 Можно передавать несколько параметров — хук `useParams()` соберёт их все в один объект.

---

## 🔹 Типичные ошибки

| ⚠️ Ошибка                                    | 💡 Как исправить                                                                       |
| -------------------------------------------- | -------------------------------------------------------------------------------------- |
| Пишешь путь без `:`                          | Убедись, что параметр начинается с `:` (например, `/users/:id`)                        |
| Вызываешь `useParams()` вне компонента       | Этот хук можно использовать **только внутри компонента**, который рендерится маршрутом |
| Пытаешься получить параметр до инициализации | Проверяй, что `useParams()` уже вернул данные, особенно при асинхронных запросах       |
