# 📦 Тема 2.2 - `useEffect`: жизненный цикл и функция очистки

В этой теме мы рассматриваем, как `useEffect` заменяет методы жизненного цикла классовых компонентов и зачем нужна функция очистки (cleanup).

---

## 🚀 Основные моменты

> 📌 В классовых компонентах были методы:
> componentDidMount, componentDidUpdate, componentWillUnmount.

> 📌 В функциональных компонентах всё это объединяет useEffect.

> 📌 Очистка нужна для освобождения ресурсов: таймеров, подписок, слушателей событий.

---

## 🔹 Примеры

### 1. Монтирование (аналог componentDidMount)

```javascript
import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("Компонент смонтировался ✅");
  }, []);

  return <h1>Привет, мир!</h1>;
}

export default App;
```

> 📌 Срабатывает только при первом рендере.

### 2. Обновление (аналог componentDidUpdate)

```javascript
import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Обновление count:", count);
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

> 📌 Срабатывает каждый раз при изменении count.

### 3. Размонтирование (аналог componentWillUnmount)

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
      console.log("Таймер очищен ⏱️");
    };
  }, []);

  return <p>Прошло секунд: {time}</p>;
}

export default Timer;
```

> 📌 Возвращаемая функция — это cleanup, вызывается при размонтировании.

### 4. Очистка при изменении зависимостей

```javascript
import React, { useState, useEffect } from "react";

function WindowSize() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    console.log("Добавлен слушатель 👂");

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Слушатель удалён ❌");
    };
  }, []);

  return <p>Ширина окна: {width}px</p>;
}

export default WindowSize;
```

> 📌 Важно удалять слушатели, чтобы избежать утечек памяти.
