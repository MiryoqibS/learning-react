# 📦 Тема 3.11 - `Server Components` vs `Client Components`

---

В App Router компоненты по умолчанию выполняются на сервере, но при необходимости мы можем делать компоненты клиентскими (интерактивными).

---

## 🚀 Основная идея

> 📌 Server Component — рендерится на сервере, в браузер отправляется уже готовый HTML (без JS).

> 📌 Client Component — рендерится в браузере и может использовать хуки и события.

---

## 🔹 Два типа компонентов

| Тип компонента       | Где выполняется     | Можно ли `useState` и `useEffect`? | Есть доступ к DOM? | Как объявляется             |
| -------------------- | ------------------- | ---------------------------------- | ------------------ | --------------------------- |
| **Server Component** | На сервере          | ❌ Нет                             | ❌ Нет             | По умолчанию                |
| **Client Component** | В браузере (клиент) | ✅ Да                              | ✅ Да              | `use client` в начале файла |

---

## 🔹 Как определить тип

По умолчанию компонент — серверный:

```javascript
export default async function Page() {
  const data = await fetch("https://api.example.com").then((r) => r.json());
  return <p>{data.title}</p>;
}
```

> 📌 Здесь можно использовать await, но нельзя использовать useState, useEffect.

Чтобы сделать компонент клиентским

```javascript
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Clicked: {count}</button>;
}
```

> 📌 Если нужна интерактивность (клики, форма, анимация) → это Client Component.

---

## 🔹 Как правильно комбинировать

Можно:

```bash
Server Component
   ↓ внутри ↓
Client Component   ✅
```

Нельзя:

```bash
Client Component
    ↓ внутри ↓
Server Component ❌
```

Пример корректной композиции

```javascript
import LikeButton from "./LikeButton"; // LikeButton — клиентский

export default async function Product() {
  const product = await fetchProduct(); // можно await

  return (
    <div>
      <h1>{product.name}</h1>
      <LikeButton /> {/* интерактив отдельным клиентским компонентом */}
    </div>
  );
}
```

---

## 🔹 Когда какой компонент использовать

| Задача                       | Какой компонент использовать | Причина                            |
| ---------------------------- | ---------------------------- | ---------------------------------- |
| Получение данных (fetch, БД) | **Server**                   | Данные доступны прямо в компоненте |
| Кнопки / формы / события     | **Client**                   | Нужны хуки и взаимодействие с DOM  |
| UI без интерактива           | **Server**                   | Быстрее, меньше JS в браузере      |

---

## 💡 Что важно понять

- Если есть хуки → это Client Component.
- Если компонент только отображает данные, не изменяясь → оставляй его серверным.
- Чем меньше клиентских компонентов → тем быстрее приложение.
