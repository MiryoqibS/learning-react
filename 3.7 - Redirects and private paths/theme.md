# 📦 Тема 3.7 - Navigate и приватные пути в React Router

В этой теме мы разбираем, как делать редиректы (перенаправления) и защищённые маршруты, которые доступны только авторизованным пользователям.

## 🚀 Основная идея

> 📌 Navigate используется для перенаправления пользователя на другой маршрут.

> 📌 Приватные маршруты (Private Routes) позволяют ограничить доступ к определённым страницам (например, /profile) только для авторизованных пользователей.

---

## 🔹 Когда использовать

Используй Navigate и приватные пути, если:

- хочешь перенаправлять пользователя после логина или логаута;
- хочешь защитить часть маршрутов (например, /profile или /dashboard);
- хочешь управлять доступом в зависимости от состояния авторизации (isAuth).

---

## 🔹 Пример структуры проекта

```bash
src/
├── components/
│   └── Navbar.jsx
├── contexts/
│   └── authContext.js
├── providers/
│   └── authProvider.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── ProfilePage.jsx
│   ├── AboutPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx
└── main.jsx
```

---

## 🔹 Пример реализации приватных путей

### 📂 PrivatePage.jsx

```javascript
import { Navigate, Outlet } from "react-router-dom";

export const PrivatePage = ({ allowed }) => {
  return allowed ? <Outlet /> : <Navigate to="/login" />;
};
```

> 📌 Если пользователь авторизован (allowed === true) — он видит вложенные маршруты.

> 📌 Если нет — происходит редирект на /login.

### 📂 App.jsx

```javascript
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { authContext } from "./contexts/authContext";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { PrivatePage } from "./pages/PrivatePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { ProfilePage } from "./pages/ProfilePage";
import { AboutPage } from "./pages/AboutPage";
import { AuthProvider } from "./providers/authProvider";

export const App = () => {
  const { isAuth } = useContext(authContext);

  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route element={<PrivatePage allowed={isAuth} />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>

          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
};
```

> 📌 Приватная страница /profile доступна только если isAuth === true.

> 📌 Если пользователь не авторизован — он перенаправляется на /login.

---

## ⚙️ Подводные камни

| ⚠️ Проблема                          | 💡 Как исправить                                                 |
| ------------------------------------ | ---------------------------------------------------------------- |
| Редирект после `logout` идёт не туда | Добавь `setTimeout(() => navigate("/"), 0)` или перенеси логику  |
| Редирект срабатывает до `navigate()` | Это из-за ререндера — решается корректным порядком вызовов       |
| `PrivatePage` не рендерит ничего     | Проверь, что внутри него есть `<Outlet />` и вложенные `<Route>` |
