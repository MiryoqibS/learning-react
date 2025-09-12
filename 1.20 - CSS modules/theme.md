# 📦 Тема 1.20 - CSS Модули в React

> CSS Modules — это способ писать стили локально, чтобы они применялись только к конкретному компоненту.
> В отличие от обычного CSS, где стили глобальные и могут конфликтовать, CSS Modules автоматически генерирует уникальные имена классов.

---

## 🔹 Подключение CSS Modules

```javascript
// Button.module.css
.btn {
  background-color: #4f46e5;
  color: white;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
}

.btn:hover {
  background-color: #4338ca;
}
```

```javascript
// Button.jsx
import React from "react";
import styles from "./Button.module.css";

export const Button = ({ label }) => {
  return <button className={styles.btn}>{label}</button>;
};
```

> 📌 `styles.btn` — это уникальный класс, который не пересечётся с другими.

---

## 🔹 Динамические классы

```javascript
// Alert.module.css
.success {
  color: green;
}

.error {
  color: red;
}
```

```javascript
// Alert.jsx
import React from "react";
import styles from "./Alert.module.css";

export const Alert = ({ type, message }) => {
  return (
    <p className={type === "success" ? styles.success : styles.error}>
      {message}
    </p>
  );
};
```

> 📌 Можно условно подставлять разные классы в зависимости от пропсов.

---

## 🔹 Несколько классов

```javascript
// Card.module.css
.card {
  padding: 20px;
  border-radius: 12px;
  background: #1f2937;
}

.shadow {
  box-shadow: 0 4px 8px rgba(0,0,0,0.25);
}
```

```javascript
// Card.jsx
import styles from "./Card.module.css";

export const Card = ({ children }) => {
  return <div className={`${styles.card} ${styles.shadow}`}>{children}</div>;
};
```

> 📌 Можно комбинировать классы через шаблонные строки.

---

## ⚠️ Подводные камни

| Подводный камень              | Объяснение                                                                 |
| ----------------------------- | -------------------------------------------------------------------------- |
| Локальные только по умолчанию | CSS Modules работают локально, но `:global {}` делает стили глобальными.   |
| Длинные className             | Иногда классы превращаются в длинные хэши — неудобно дебажить в браузере.  |
| Поддержка инструментов        | Нужно настроить сборщик (например, Vite, CRA уже поддерживает из коробки). |
