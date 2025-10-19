# 📦 Тема 3.5 - `Layout` и `Outlet`: вложенные маршруты

В этой теме мы разбираем, как создавать вложенные маршруты в React Router и использовать компонент `<Outlet />` для отображения дочерних страниц внутри общего Layout-а (макета).

---

## 🚀 Основная идея

> 📌 `Layout` — это общий шаблон страницы, который включает в себя повторяющиеся части (например, шапку, меню, футер).
> 📌 `Outlet` — это место внутри Layout-а, куда будут подставляться дочерние маршруты.

---

## 🔹 Пример структуры

```bash
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
├── layouts/
│   └── MainLayout.jsx
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
├── App.jsx
└── main.jsx
```

> 📌 Такой подход помогает не дублировать код (например, не вставлять хедер в каждую страницу вручную).

---

## 🔹 Пример кода: `Layout` и `Outlet`

### 📂 `layouts`/`MainLayout.jsx`

```javascript
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
```

> 📌 `Outlet` — это “дырка”, через которую React Router будет рендерить дочерние маршруты.

---

## 🔹 Настройка маршрутов

### 📂 `App.jsx`

```javascript
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};
```

> 📌 Всё, что внутри `<Route path="/" element={<MainLayout />}>`, будет отображаться в Outlet.

## 🔹 Что важно понять

- 🧩 Родительский маршрут (Layout) — это “контейнер”.
- 🧩 Дочерние маршруты подставляются в `<Outlet />`.
- 🧩 Можно вкладывать Layout в Layout — создавать многоуровневую структуру.

---

## 🔹 Пример вложенности

```javascript
<Route path="/" element={<MainLayout />}>
  <Route index element={<Home />} />
  <Route path="dashboard" element={<DashboardLayout />}>
    <Route path="stats" element={<Stats />} />
    <Route path="profile" element={<Profile />} />
  </Route>
</Route>
```

> 📌 Здесь `DashboardLayout` — это вложенный `Layout`, у которого свой `Outlet`.

---

## 🔹 Полезные подсказки

| 💡 Подсказка | Описание                                              |
| ------------ | ----------------------------------------------------- |
| `<Outlet />` | Маршрутизатор “вставляет” сюда нужный компонент       |
| `Layout`     | Удобен для повторяющихся элементов (header, sidebar)  |
| Вложенность  | Можно создавать многоуровневую структуру маршрутов    |
| Чистота кода | Layout помогает не дублировать общие части приложения |
