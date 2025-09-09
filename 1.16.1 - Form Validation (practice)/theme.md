# 📦 Тема 1.16.1 - Валидация форм (практика)

В этом проекте реализована базовая форма с валидацией полей (имя пользователя, почта, пароль, подтверждение пароля, дата окончания учебного заведения).
Используются кастомный хук `useForm`, компоненты `Field`, `Select`, `Button` и утилита `validators`.

---

## 📂 Структура проекта

```javascript
src/
 ├── components/
 │    ├── Form.jsx         // Основная форма
 │    ├── UI/
 │    │    ├── Field.jsx   // Поле ввода с label + error
 │    │    ├── Input.jsx   // Гибкий input
 │    │    ├── Select.jsx  // Выпадающий список
 │    │    ├── Button.jsx  // Кнопка
 │    │    └── ErrorText.jsx // Текст ошибки
 │
 ├── hooks/
 │    └── useForm.js       // Кастомный хук для работы с формой
 │
 ├── utils/
 │    └── validators.js    // Правила валидации для каждого поля
```

---

## ⚡ Основные моменты реализации

### 1. Хук useForm

```javascript
const { values, errors, handleChange, isValid, clearValues } = useForm({
  username: "",
  email: "",
  password: "",
  repeatPassword: "",
  graduationYear: "",
});
```

> 📌 values → хранит значения полей.

> 📌 errors → хранит ошибки.

> 📌 handleChange → обновляет значение и валидирует.

> 📌 isValid() → проверяет заполненность и отсутствие ошибок.

> 📌 clearValues() → очищает форму.

### 2. Компонент Field

```javascript
<Field
  label="Имя пользователя"
  inputProps={{
    type: "text",
    placeholder: "...",
    onChange: (e) => handleChange("username", e.target.value),
    value: values["username"],
  }}
  error={errors["username"]}
/>
```

### Поле включает:

> 📌 label (подпись)

> 📌 Input с кастомными классами

> 📌 вывод ошибки

### 3. Компонент Select

```javascript
<Select
  label="Дата окончания учебного заведения"
  options={years}
  onChange={(e) => handleChange("graduationYear", e.target.value)}
  error={errors["graduationYear"]}
/>
```

> 📌 Список генерируется динамически (years).

> 📌 Первое значение — заглушка "...Выберите год".

### 4. Сабмит формы

```javascript
const handleSubmit = (e) => {
  e.preventDefault();

  if (isValid()) {
    console.log("✅ Успешные данные", values);
    clearValues();
  } else {
    console.log("❌ Ошибка валидации", errors);
  }
};
```

---

## 🚀 Результат

- Проверка обязательных полей.
- Проверка email.
- Совпадение пароля и подтверждения.
- Выбор года выпуска.
- Красивые UI-компоненты на TailwindCSS.
