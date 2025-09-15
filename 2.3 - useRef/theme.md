# 📦 Тема 2.3 - useRef

В этой теме мы разбираем хук useRef, который позволяет сохранять значения между рендерами без их повторного отображения.

---

## 🚀 Основные моменты

> 📌 useRef возвращает объект вида { current: значение }.

> 📌 Изменение ref.current не вызывает повторный рендер.

> 📌 Основные применения:

- доступ к DOM-элементам;
- хранение таймеров (`setInterval`, `setTimeout`);
- сохранение любых данных, которые должны пережить рендер, но не обновлять интерфейс.P

---

## 🔹 Примеры

### 1. Ссылка на DOM-элемент

```javascript
import React, { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" placeholder="Введи текст..." />
      <button onClick={handleFocus}>Фокус</button>
    </div>
  );
}

export default InputFocus;
```

> 📌 Здесь useRef даёт прямой доступ к input, чтобы вызвать focus().

### 2. Хранение таймера

```javascript
import React, { useState, useRef } from "react";

function Timer() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setTime((t) => t + 1);
      }, 1000);
    }
  };

  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  return (
    <div>
      <p>Секунд прошло: {time}</p>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
    </div>
  );
}

export default Timer;
```

> 📌 ref хранит id интервала и не сбрасывается при рендерах.

### 3. Сохранение предыдущего значения

```javascript
import React, { useState, useEffect, useRef } from "react";

function PreviousValue() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(null);

  useEffect(() => {
    prevCount.current = count;
  }, [count]);

  return (
    <div>
      <p>Текущее: {count}</p>
      <p>Предыдущее: {prevCount.current}</p>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
    </div>
  );
}

export default PreviousValue;
```

> 📌 useRef помогает "помнить" предыдущее значение состояния.
