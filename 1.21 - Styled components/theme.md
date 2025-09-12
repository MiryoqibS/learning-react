# 📦 Тема 1.21 - Styled Components

---

> **Styled Components** — это библиотека для стилизации React-компонентов через JavaScript.  

> Стили описываются прямо в компоненте, а на выходе генерируются уникальные CSS-классы.

---

## 🔹 Установка

```bash
npm install styled-components
```

---

## 🔹 Создание стилей

```javascript
import styled from "styled-components";

const Button = styled.button`
  background: #4f46e5;
  color: #fff;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #4338ca;
  }
`;

export const App = () => <Button>Нажми</Button>;
```

> 📌 Каждый styled-компонент = React-компонент со своими уникальными стилями.

---

## 🔹 Передача пропсов в стили

```javascript
const Title = styled.h1`
  color: ${({ primary }) => (primary ? "purple" : "gray")};
`;

export const App = () => (
  <>
    <Title primary>Фиолетовый заголовок</Title>
    <Title>Серый заголовок</Title>
  </>
);
```

> 📌 Пропсы компонента можно использовать прямо в стилях.

---

## 🔹 Глобальные стили + темы

```javascript
import { ThemeProvider, createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Inter", sans-serif;
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;

const lightTheme = {
  bg: "#fff",
  text: "#111827",
};

const darkTheme = {
  bg: "#111827",
  text: "#f9fafb",
};

export const App = () => (
  <ThemeProvider theme={darkTheme}>
    <GlobalStyles />
    <h1>Привет!</h1>
  </ThemeProvider>
);
```

> 📌 ThemeProvider позволяет делать тёмную/светлую тему.

---

## 🔹 Преимущества

- Локальные стили без конфликтов.
- Темизация через ThemeProvider.
- Динамика стилей от пропсов.
- Удобно для дизайн-систем.

---

## ⚠️ Подводные камни

| Подводный камень   | Объяснение                                                                |
| ------------------ | ------------------------------------------------------------------------- |
| Бандл вес          | Добавляет размер к бандлу (хуже чем Tailwind по перформансу).             |
| Медленнее Tailwind | Для быстрого прототипирования Tailwind удобнее.                           |
| Дебаг в браузере   | Генерирует длинные уникальные классы (сложнее смотреть стили в DevTools). |
| SSR настройка      | В Next.js/SSR нужно доп. конфиг для styled-components.                    |
