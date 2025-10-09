# 📦 Урок 3.4 - `useNavigate`: навигация программно

---

## 🚀 Основная идея

Хук `useNavigate` из React Router позволяет переходить на другие страницы программно —
например, после логина, выхода из аккаунта или успешного сохранения данных.

Это альтернатива тегу `<Link>` или `<NavLink>`, но через код.

---

## 🔹 Импорт и базовое использование

```javascript
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // логика авторизации
    navigate("/profile");
  };

  return (
    <button
      onClick={handleLogin}
      className="px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
    >
      Войти
    </button>
  );
};
```

> 📌 После нажатия — пользователь переходит на `/profile`.

---

## 🔹 Возврат назад

Можно использовать отрицательные числа, чтобы двигаться в истории назад или вперёд.

```javascript
const navigate = useNavigate();

// Назад
navigate(-1);

// Вперёд
navigate(1);
```

> 📌 Это работает как кнопки «Назад» и «Вперёд» в браузере.

---

## 🔹 Замена текущего маршрута (replace: true)

Иногда нужно перейти на новую страницу, не добавляя запись в историю.
Например, после логина — чтобы нельзя было вернуться на страницу входа по кнопке «Назад».

```javascript
navigate("/home", { replace: true });
```

> ⚙️ Теперь переход на /home заменит текущий маршрут.

---

## 🔹 Передача состояния (state)

Можно передать объект состояния при переходе:
это удобно для всплывающих уведомлений или переноса данных между страницами.

```javascript
navigate("/success", {
  state: { message: "Регистрация прошла успешно!" },
});
```

> 📌 А на целевой странице можно это получить:

```javascript
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const message = location.state?.message;

  return <p>{message}</p>;
};
```

---

## 🔹 Пример — кнопка «Назад к списку»

```javascript
import { useNavigate } from "react-router-dom";

export const PostDetail = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
    >
      ← Назад
    </button>
  );
};
```

> 📌 Идеально для карточек, модалок и страниц деталей.

---

## ⚠️ Подводные камни

| Ошибка                                             | Причина                                  | Решение                                            |
| -------------------------------------------------- | ---------------------------------------- | -------------------------------------------------- |
| ❌ `navigate` не работает                          | Компонент не обёрнут в `<BrowserRouter>` | Проверь, что App обёрнут в `BrowserRouter`         |
| ❌ Страница не заменяется                          | Не передан `{ replace: true }`           | Добавь `{ replace: true }` в navigate              |
| ❌ Состояние (`state`) теряется после перезагрузки | `useNavigate` не сохраняет state в URL   | Храни данные в `localStorage` или query-параметрах |
