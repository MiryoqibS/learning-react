# 📦 Тема 2.13 – Хук `useImperativeHandle`

---

## 🚀 Основная идея

- `useImperativeHandle` позволяет управлять тем, какие методы или свойства будут доступны снаружи через ref.

- Обычно используется вместе с `forwardRef`.

- Это нужно, если компоненту нужно выставить наружу управляемый API (например: методы focus, reset, scrollToTop).

---

## 🔹 Пример кода

```javascript
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} {...props} className="border p-2 rounded" />;
});

export const Form = () => {
  const inputRef = useRef();

  return (
    <div className="flex flex-col gap-4 p-4">
      <Input ref={inputRef} placeholder="Введите текст..." />
      <button
        className="bg-blue-500 text-white py-1 px-3 rounded"
        onClick={() => inputRef.current.focus()}
      >
        Фокус
      </button>
      <button
        className="bg-red-500 text-white py-1 px-3 rounded"
        onClick={() => inputRef.current.clear()}
      >
        Очистить
      </button>
    </div>
  );
};
```

> 📌 Теперь компонент `Input` даёт наружу методы `focus()` и `clear()`, которые можно вызывать из Form.

---

## 📌 Подсказки и пояснения

- Всегда используем `forwardRef`, иначе `ref` не попадёт в дочерний компонент.

- `useImperativeHandle` нужен редко, но бывает очень полезен для UI-компонентов.

- Хороший кейс: кастомные поля ввода, сложные анимации, скроллы.

---

## ⚠️ Подводные камни

| Проблема                            | Решение                                  |
| ----------------------------------- | ---------------------------------------- |
| `ref` не работает внутри компонента | Обязательно оборачиваем в `forwardRef`   |
| Слишком много методов наружу        | Выставляй только минимально нужный API   |
| Можно обойтись без него             | Иногда лучше передать `props`, чем `ref` |
