# 📦 Тема 3.9 - Next.js: Введение

В этой теме мы знакомимся с Next.js — фреймворком над React, который добавляет серверный рендеринг, статическую генерацию страниц и встроенную маршрутизацию.

## 🚀 Основная идея

> 📌 Next.js = React + серверный рендеринг + оптимизация

С его помощью можно:

- ускорить загрузку страниц
- улучшить SEO (индексацию в поисковиках)
- заранее генерировать страницы (статически)
- создавать гибридные приложения (часть страниц статичны, часть динамичны)

---

## 🔹 Маршрутизация без React Router

В Next.js каждый файл в pages/ = отдельная страница.

```bash
pages/
│ index.jsx      →  /
│ about.jsx      →  /about
│ blog/[id].jsx  →  /blog/42
```

> 📌 Никаких `<Routes>`, `<Route>` — маршруты работают автоматически.

---

## 🔹 Типы рендеринга (как страница получает данные)

| Тип     | Где рендерится?               | Когда используется                      | Пример                 |
| ------- | ----------------------------- | --------------------------------------- | ---------------------- |
| **CSR** | В браузере                    | Динамичные UI (чаты, лента обновляется) | `useEffect(fetch...)`  |
| **SSR** | На сервере при каждом запросе | Когда данные меняются очень часто       | `getServerSideProps()` |
| **SSG** | На билде (один раз)           | Статичные страницы                      | `getStaticProps()`     |
| **ISR** | Статика + автообновление      | Новости, каталог, Instagram-посты       | `revalidate: 60`       |

---

## 🔹 Пример CSR (классический React стиль)

```javascript
import { useEffect, useState } from "react";

export default function Home() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(Date.now());
  }, []);

  return <p>Time: {time}</p>;
}
```

> 📌 Загружается только в браузере → сервер не участвует.

---

## 🔹 Пример SSR — данные приходят с сервера перед рендерингом

```javascript
export async function getServerSideProps() {
  const data = await fetch("https://api.example.com/info").then((r) =>
    r.json()
  );

  return { props: { data } };
}

export default function Page({ data }) {
  return <p>{data.message}</p>;
}
```

---

## 🔹 Пример SSG — страница создаётся 1 раз на этапе сборки

```javascript
export async function getStaticProps() {
  return {
    props: {
      time: Date.now(),
    },
  };
}

export default function Page({ time }) {
  return <p>Generated: {time}</p>;
}
```

> 📌 Используется для FAQ, документации, блогов.

---

## 🔹 Пример ISR — страница обновляется раз в N секунд

```javascript
export async function getStaticProps() {
  const data = await fetch("https://api.example.com/posts").then((r) =>
    r.json()
  );

  return {
    props: { data },
    revalidate: 30, // обновление раз в 30 сек
  };
}
```

> 📌 Баланс скорости и актуальности.

---

## 🔹 Что важно понять

- Next.js не заменяет React — он расширяет его.
- В Next.js не нужен react-router → маршруты = файлы.
- Можно выбирать где и когда получать данные (клиент / сервер / билд).
- Подходит для крупных, быстрых и SEO-оптимизированных приложений.

---

## 💡 Полезные подсказки

| 💡 Подсказка               | Описание                                                          |
| -------------------------- | ----------------------------------------------------------------- |
| Нет `window` на сервере    | В SSR код, зависящий от браузера, писать внутри `useEffect`       |
| SSG быстрее SSR            | Если страница не меняется → используй `getStaticProps`            |
| ISR — лучший вариант       | Для динамического контента, который обновляется не каждую секунду |
| App Router vs Pages Router | Сейчас ты изучаешь **Pages Router** (классический)                |
