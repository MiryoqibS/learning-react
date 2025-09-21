# 📦 Тема 2.11 - Хук `useDebugValue`

---

## 🚀 Основная идея

> `useDebugValue` помогает разработчику в отладке кастомных хуков.

> Он отображает дополнительную информацию в `React DevTools`.

> В реальных проектах почти не используется, кроме библиотек хуков.

---

## 🔹 Пример простого хука

```javascript
import { useState, useEffect, useDebugValue } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Добавляем в React DevTools надпись Online/Offline
  useDebugValue(isOnline ? " Online" : " Offline");

  return isOnline;
};
```

> 📌 Теперь, если открыть `DevTools` → `Components`, то в хуке `useOnlineStatus` будет видно значение "Online" или "Offline".

---

## 🔹 Использование в компоненте

```javascript
import React from "react";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export const Profile = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="p-4 border rounded">
      <h3 className="text-lg font-bold">Профиль</h3>
      <p className={isOnline ? "text-green-600" : "text-red-600"}>
        {isOnline ? "В сети" : "Не в сети"}
      </p>
    </div>
  );
};
```

---

## 📌 Подсказки и пояснения

> Хук работает только для `DevTools`, в продакшене его можно вообще не писать.

> Обычно полезен при создании своей библиотеки хуков, чтобы другим разработчикам было удобнее.

> Можно передавать функцию для ленивого форматирования, чтобы не нагружать рендер.

```javascript
useDebugValue(value, (v) => `Value: ${v}`);
```

---

## ⚠️ Подводные камни

| Проблема                      | Решение                                                 |
| ----------------------------- | ------------------------------------------------------- |
| Не видно разницы в UI         | Этот хук работает только в `DevTools`                   |
| Нагружает рендер вычислениями | Используй второй аргумент (`formatter`)                 |
| Используется слишком часто    | На практике лучше ограничить, это больше "nice to have" |
