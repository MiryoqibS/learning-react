# 📦 Тема 2.9 - Кастомный хук для работы с `API`

---

## 🚀 Основная идея

Кастомный хук позволяет вынести логику работы с `API` в отдельное место.
Это упрощает код компонентов и делает его переиспользуемым.

---

## 🔹 Пример кода

```javascript
import { useCallback, useState } from "react";

export const useApi = (baseUrl) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = useCallback(
    async (endpoint) => {
      try {
        setIsLoading(true);
        const response = await fetch(`${baseUrl}${endpoint}`);
        if (!response.ok) {
          throw new Error(`Ошибка HTTP запроса: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
    },
    [baseUrl]
  );

  return { data, isLoading, error, get };
};
```

> 📌 Теперь любой компонент может использовать useFetch, не дублируя логику запросов.

---

## 🔹 Использование в компоненте

```javascript
import React, { useEffect } from "react";
import { useApi } from "../hooks/useApi";

export const UserList = () => {
  const { data, isLoading, error, get } = useApi(
    "https://jsonplaceholder.typicode.com/"
  );

  useEffect(() => {
    get("users");
  }, [get]);

  if (isLoading) {
    return <p>Идёт загрузка...</p>;
  }

  if (error) {
    return <p>Ошибка {error.message}</p>;
  }

  return (
    <div className="flex flex-col items-start gap-4 w-full max-w-[500px] py-6">
      {data &&
        data.length &&
        data.map((user) => (
          <div
            key={user.id}
            className="flex flex-col items-start gap-2 w-full bg-gray-300 rounded py-2 px-4"
          >
            <p className="bg-gray-400 rounded py-0.5 px-2">{user.username}</p>
            <p>{user.name}</p>
            <p className="text-xs bg-gray-500 py-0.5 px-1 text-white rounded">
              {user.email}
            </p>
          </div>
        ))}
    </div>
  );
};
```

---

## 📌 Подсказки и пояснения

- Всегда есть три состояния: `loading`, `error`, `data`.
- Хорошая практика — оборачивать в `try`...`catch`.

---

## ⚠️ Подводные камни

| Проблема                                    | Решение                                  |
| ------------------------------------------- | ---------------------------------------- |
| Компонент размонтировался, а fetch ещё идёт | Добавляем `ignore` или `AbortController` |
| Дубликат логики в компонентах               | Выносим всё в кастомный хук              |
| Нужно разные методы (POST, PUT, DELETE)     | Передавать `options` в `fetch`           |
