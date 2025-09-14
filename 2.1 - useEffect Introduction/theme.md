# 📦 Тема 2.1 - `useEffect`: введение

В этой теме мы знакомимся с хуком `useEffect`, который позволяет выполнять побочные эффекты в функциональных компонентах React.

---

## 🚀 Основные моменты

> 📌 useEffect нужен для работы с побочными эффектами: запросы к API, работа с DOM, подписки, таймеры.

> 📌 Срабатывает после рендера компонента.

> 📌 `useEffect(callback, deps)` Принимает два аргумента:

- callback — функция с логикой эффекта.
- deps — массив зависимостей, контролирующий повторный запуск эффекта.

---

## 🔹 Примеры

### 1. Эффект без зависимостей

```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Компонент отрендерился!");
  });

  return <h1>Привет, useEffect 👋</h1>;
}

export default App;
```

> 📌 Эффект будет срабатывать после каждого рендера.

### 2. Эффект с пустым массивом зависимостей

```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Компонент смонтировался ✅");
  }, []);

  return <h1>useEffect с []</h1>;
}

export default App;
```

> 📌 Эффект сработает только один раз при монтировании.

### 3. Эффект с зависимостями

```javascript
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Счётчик обновился: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;
```

> 📌 Эффект выполнится каждый раз, когда изменится count.

### 4. Очистка эффекта (cleanup)

```javascript
import React, { useState, useEffect } from "react";

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
      console.log("Таймер остановлен ⏱️");
    };
  }, []);

  return <p>Прошло секунд: {time}</p>;
}

export default Timer;
```

> 📌 Возвращаемая функция из useEffect вызывается при размонтировании компонента (или при изменении зависимостей).

---

## ⚠️ Подводные камни

- ❌ Если не указать зависимости → эффект будет выполняться каждый рендер.
- ❌ Бесконечный цикл: если внутри эффекта менять состояние без зависимостей.
- ✅ Для таймеров, подписок и слушателей событий всегда делаем очистку в return.
