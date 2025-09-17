# 📦 Тема 2.5 - useCallback

В этой теме мы разбираем хук `useCallback`, который помогает оптимизировать функции и избежать их лишнего пересоздания при каждом рендере.

---

## 🚀 Основные моменты

> 📌 `useCallback(fn, deps)` возвращает мемоизированную функцию, которая изменится только при изменении зависимостей.

> 📌 Полезен, когда функция передаётся в дочерние компоненты, особенно обёрнутые в `React.memo`.

> 📌 Часто используется вместе с useMemo и memo для оптимизации списка элементов или коллбэков.

---

## 🔹 Пример Без useCallback

```javascript
import React, { useState } from "react";
import { Child } from "./Child";

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Клик!");
  };

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

```javascript
import React from "react";

export const Child = React.memo(({ onClick }) => {
  console.log("🔄 Ререндер Child");
  return <button onClick={onClick}>Дочерняя кнопка</button>;
});
```

> 📌 Даже если Child обёрнут в React.memo, он всё равно будет перерендериваться, потому что handleClick создаётся заново на каждый рендер.

---

## 🔹 Пример С useCallback

```javascript
import React, { useState, useCallback } from "react";
import { Child } from "./Child";

export function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Клик!");
  }, []);

  return (
    <div>
      <p>Счётчик: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <Child onClick={handleClick} />
    </div>
  );
}
```

> 📌 Теперь handleClick будет одной и той же функцией между рендерами → Child не будет зря рендериться.

---

## ⚠️ Подводные камни

- ❌ Не нужно оборачивать все функции подряд — это перегрузит код.
- ✅ Используй useCallback, когда:
- функция передаётся в мемоизированный дочерний компонент (memo);
- функция используется в зависимостях useEffect / useMemo;
- есть риск частых ререндеров.
