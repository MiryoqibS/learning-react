# 📦 Тема 1.12 - Обработка событий в React

---

## 🔹 Краткое описание

`React` использует собственную систему событий, которая работает одинаково во всех браузерах.
События пишутся в camelCase (`onClick`, `onChange`) и принимают функцию-обработчик.

---

## 🔹 Основы обработки событий

```javascript
function Button() {
  function handleClick() {
    alert("Нажал на кнопку!");
  }

  return <button onClick={handleClick}>Жми</button>;
}
```

> 📌 В React нельзя писать onclick="..." как в HTML. Нужно использовать onClick={...}.

---

## 🔹 onChange и управляемые компоненты

`onChange` используется для работы с `input`, `textarea` и `select`.

```javascript
import { useState } from "react";

function InputExample() {
  const [value, setValue] = useState("");

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Введи текст"
    />
  );
}
```

> 📌 Такой input называется управляемым компонентом, потому что его значение хранится в `state`.

---

## 🔹 onSubmit в формах

```javascript
function Form() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Форма отправлена");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Имя" />
      <button type="submit">Отправить</button>
    </form>
  );
}
```

> 📌 Без `e.preventDefault()` страница перезагрузится.

---

## 🔹 События мыши и клавиатуры

```javascript
function Events() {
  return (
    <div>
      <button onDoubleClick={() => alert("Двойной клик!")}>Двойной клик</button>
      <input onKeyDown={(e) => console.log("Клавиша:", e.key)} />
    </div>
  );
}
```

---

## 🔹 События фокуса

```javascript
function FocusExample() {
  return (
    <input
      onFocus={() => console.log("Фокус")}
      onBlur={() => console.log("Потеря фокуса")}
    />
  );
}
```

---

## 🔹 Событие прокрутки

```javascript
function ScrollExample() {
  return (
    <div
      style={{ height: "100px", overflow: "auto" }}
      onScroll={() => console.log("Скролл!")}
    >
      <div style={{ height: "300px" }}>Содержимое</div>
    </div>
  );
}
```

---

## 🔹 События загрузки и ошибки

```javascript
function ImageExample() {
  return (
    <img
      src="image.jpg"
      onLoad={() => console.log("Картинка загружена")}
      onError={() => console.log("Ошибка загрузки")}
      alt="demo"
    />
  );
}
```

---

## ⚠️ Подводные камни

| Ошибка                              | Почему плохо                         | Решение                                    |
| ----------------------------------- | ------------------------------------ | ------------------------------------------ |
| Писать `onclick="..."`              | HTML-синтаксис, не работает в React  | Использовать `onClick={handler}`           |
| Забыть `e.preventDefault()` в форме | Страница перезагружается             | Добавлять `e.preventDefault()`             |
| Изменять input без `state`          | Значение не контролируется React     | Делать управляемые компоненты              |
| Игнорировать `onBlur` / `onFocus`   | Потеря контроля над валидацией формы | Использовать для UX (валидация, подсветка) |
| Навешивать слишком много слушателей | Падает производительность            | Оптимизировать, использовать делегирование |
