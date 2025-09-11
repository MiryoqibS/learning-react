# 📦 Тема 1.17 - Компоненты высшего порядка (HOC)

---

> **HOC (Higher-Order Component)** — это функция, которая принимает компонент и возвращает новый компонент с расширенной логикой.  
> Обычно используется для повторного использования кода (логики), без дублирования в каждом компоненте.

---

## 🔹 Синтаксис

```javascript
function withLogger(WrappedComponent) {
  return function EnhancedComponent(props) {
    console.log("Пропсы:", props);
    return <WrappedComponent {...props} />;
  };
}
```

> 📌 Здесь withLogger — это HOC, который оборачивает WrappedComponent и добавляет вывод пропсов в консоль.

---

## 🔹 Применение HOC

```javascript
function Hello({ name }) {
  return <h1>Привет, {name}!</h1>;
}

const HelloWithLogger = withLogger(Hello);

// Использование:
<HelloWithLogger name="Mirka" />;
```

> 📌 Теперь при каждом рендере будут логироваться пропсы, а компонент Hello останется чистым.

---

## 🔹 Основные правила HOC

- HOC не изменяет исходный компонент, а создаёт новый.
- Нужно пробрасывать пропсы ({...props}), чтобы сохранить поведение оборачиваемого компонента.
- HOC лучше использовать для повторяющейся логики (авторизация, данные, лоадеры).p

---

## 🔹 Пример — HOC для авторизации

```javascript
function withAuth(WrappedComponent) {
  return function EnhancedComponent(props) {
    if (!props.isAuth) {
      return <p>Доступ запрещён 🚫</p>;
    }
    return <WrappedComponent {...props} />;
  };
}

function Profile() {
  return <h2>Добро пожаловать в профиль!</h2>;
}

const ProtectedProfile = withAuth(Profile);

// Использование:
<ProtectedProfile isAuth={true} />;
```

> 📌 Если isAuth=false, то компонент Profile не будет показан.

---

## ⚠️ Подводные камни

| Подводный камень        | Объяснение                                                     |
| ----------------------- | -------------------------------------------------------------- |
| Потеря имени компонента | При обёртке имя меняется, нужно использовать `displayName`.    |
| Глубокая вложенность    | Слишком много HOC усложняют отладку.                           |
| Не путать с Hook        | HOC — это функция-обёртка, а хуки работают внутри компонентов. |
