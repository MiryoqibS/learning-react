# 📦 Тема 1.7 - Работа с классовыми компонентами

---

## 🔹 Краткое описание

> Классовые компоненты — это один из способов описания компонентов в React.
> Они были основным инструментом до появления хуков (`useState`, `useEffect`) и до сих пор встречаются в старых проектах.
> Классовый компонент — это ES6-класс, который наследуется от `React.Component` и должен реализовать метод `render()`.

---

## 🔹 Основные особенности

- Наследуются от `React.Component`
- Имеют встроенное состояние (`this.state`)
- Для изменения состояния используют `this.setState()`
- Поддерживают жизненные циклы (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`)

---

## 🔹 Пример кода

```javascript
import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Счётчик: {this.state.count}</h2>
        <button onClick={this.increment}>➕ Увеличить</button>
        <button onClick={this.decrement}>➖ Уменьшить</button>
      </div>
    );
  }
}

export default Counter;
```

> 📌 Здесь:

> `constructor` задаёт начальное состояние

> `this.setState` изменяет count

> `render()` возвращает JSX

---

## 🔹 Жизненный цикл (основные методы)

- `componentDidMount()` после монтирования компонента (обычно для запросов к API)
- `componentDidUpdate()` после обновления состояния или пропсов
- `componentWillUnmount()` перед удалением компонента (очистка таймеров, подписок)

---

## ⚠️ Подводные камни

- Не изменяй `this.state` напрямую → всегда через `this.setState()`
- Методы класса лучше писать стрелочными функциями (`() => {}`), чтобы не терять контекст `this`
- В современном `React` классы заменяются хуками, но классы всё ещё встречаются в старом коде
