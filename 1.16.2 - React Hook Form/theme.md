# 📦 Тема 1.16.2 - Работа с формами (`React Hook Form`)

В этом проекте показано, как работать с `React Hook Form`:

- как валидировать поля (`email`, `message`)
- как сбрасывать форму через `reset()`
- как подключать контролируемые компоненты через `Controller` (например, кастомная кнопка-чекбокс `isRead`)

---

## 🚀 Основные моменты

Установка

```bash
npm install react-hook-form
```

### Пример базовой формы

```javascript
import { useForm } from "react-hook-form";

const { register, handleSubmit, formState, reset } = useForm({
  mode: "onChange",
  defaultValues: {
    email: "",
    message: "",
  },
});

const onSubmit = (data) => {
  console.log(data);
  reset(); // очистка формы
};
```

> 📌 Здесь:

> mode: "`onChange`" — валидация срабатывает сразу при изменении.

> `reset()` — очищает форму или выставляет новые дефолтные значения.

> `formState.errors` — хранит ошибки для каждого поля.

### Кастомная кнопка (чекбокс) через Controller

```javascript
import { Controller } from "react-hook-form";
import { CheckIcon } from "lucide-react";

<Controller
  control={control}
  name="isRead"
  render={({ field: { value, onChange } }) => (
    <label className="flex items-center gap-2 text-white cursor-pointer">
      <button
        type="button"
        className={`flex items-center justify-center w-5 h-5 rounded-sm border-2 
          ${
            value ? "bg-green-600 border-green-600" : "bg-white border-gray-400"
          }`}
        onClick={() => onChange(!value)}
      >
        {value && <CheckIcon size={16} className="text-white" />}
      </button>
      I read
    </label>
  )}
/>;
```

> 📌 Здесь:

> Controller нужен для кастомных компонентов, которые нельзя напрямую связать через register.

> Мы явно используем value и onChange, чтобы правильно синхронизировать состояние.

> Кнопка рендерит CheckIcon, когда значение true.

---

## 📂 Структура проекта

App.js — главная форма с полями:

email (валидация: обязательное поле, правильный формат email)

message (валидация: обязательное поле, минимум 5 символов)

isRead (чекбокс с иконкой)

App.css — стили (в проекте ещё используется TailwindCSS для удобства).

🛠 Важные моменты и подводные камни
| Ошибка | Решение |
| -------------------------------------- | ---------------------------------------------------------------------------- |
| Иконка не рендерилась после клика | Не передавался `value` из `Controller` |
| `isRead` менялся только в одну сторону | Нужно использовать `field: { value, onChange }` |
| reset не сбрасывал чекбокс | Убедиться, что `defaultValues` заданы и `reset()` получает объект с `isRead` |
