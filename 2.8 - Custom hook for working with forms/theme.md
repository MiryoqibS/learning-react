# 📦 Тема 2.8 - Кастомный хук для работы с формами

---

## 🚀 Основные моменты

> 📌 Кастомный хук для форм позволяет хранить данные инпутов в state и управлять ими централизованно.

> 📌 Обычно он возвращает объект с текущими значениями и функцию для изменения этих значений.

> 📌 Такой подход делает формы более управляемыми и уменьшает дублирование кода.

---

## 🔹 Пример: `useForm`

```javascript
import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const handleChange = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return { formData, handleChange };
};
```

> 📌 Теперь можно подключить этот хук к любой форме.

---

## 🔹 Использование в форме

```javascript
import React from "react";
import { LoginForm } from "./components/LoginForm";
import { RegisterForm } from "./components/RegisterForm";
import { useForm } from "./hooks/useForm";

export const App = () => {
  const loginForm = useForm({});
  const registerForm = useForm({});

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Данные авторизации: ${JSON.stringify(loginForm.formData, null, 4)}`
    );
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Данные регистрации: ${JSON.stringify(registerForm.formData, null, 4)}`
    );
  };

  return (
    <div className="flex flex-col container mx-auto gap-8">
      <div className="flex flex-col gap-4">
        <h1>Авторизация</h1>
        <LoginForm {...loginForm} handleSubmit={handleLoginSubmit} />
      </div>
      <div className="flex flex-col gap-4">
        <h1>Регистрация</h1>
        <RegisterForm {...registerForm} handleSubmit={handleRegisterSubmit} />
      </div>
    </div>
  );
};
```

> 📌 Каждый input обновляет своё поле в `formData` → удобно для больших форм.

---

## ⚠️ Подводные камни

- ❌ Если не использовать `handleChange` в `input`, данные в `formData` не обновятся.

- ❌ Путаница с `handleSubmit` для разных форм (логин vs регистрация).

- ✅ Можно расширить хук: добавить валидацию, reset формы, сохранение в `localStorage`.
