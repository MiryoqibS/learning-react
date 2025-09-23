# 📦 Тема 2.16 – хук `useTransition`

---

## 🚀 Основная идея

Иногда при обновлении состояния в React нужно отделить «срочные» обновления (UI, ввод текста) от «несрочных» (например, фильтрация или рендеринг большого списка).

Хук `useTransition` позволяет отложить «тяжёлые» обновления, чтобы интерфейс оставался отзывчивым.

---

## 🔹 Синтаксис

```javascript
const [isPending, startTransition] = useTransition();
```

> `isPending` → булево, показывает, что отложенное обновление в процессе.

> `startTransition(callback)` → запускает несрочное обновление.

---

## 🔹 Пример использования

```javascript
import React, { useState, useTransition } from "react";

export const Search = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      // имитируем тяжелую фильтрацию
      const filtered = Array.from(
        { length: 10000 },
        (_, i) => `Элемент ${i}`
      ).filter((item) => item.includes(value));
      setList(filtered);
    });
  };

  return (
    <div>
      <input
        value={query}
        onChange={handleChange}
        placeholder="Поиск..."
        className="border p-2"
      />

      {isPending && <p className="text-gray-500">Загрузка...</p>}

      <ul>
        {list.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
```

---

## 📌 В этом примере:

- query обновляется сразу (UI остаётся быстрым).
- фильтрация списка — в `startTransition`, и React может прервать её, если нужно.
- `isPending` показывает индикатор «Загрузка...».

---

## 🔹 Когда использовать?

- поиск по длинному списку
- фильтрация/сортировка больших данных
- переключение между сложными UI-компонентами
- любые «тяжёлые» обновления, которые не должны блокировать ввод

---

## ⚠️ Подводные камни

- Не стоит класть в `startTransition` срочные действия (например, обработку кликов по кнопкам «Отправить»).

- Работает только в `React 18+`.

- `isPending` можно использовать для отображения индикаторов загрузки, но это не замена `isLoading` с сервера.
