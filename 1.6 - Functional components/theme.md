# 📦 Тема 1.6 - Работа с функциональными компонентами и изображениями

---

> **Описание:**
> Функциональные компоненты — основной способ написания UI в современном React. А работа с изображениями — важная часть фронтенд-разработки: их можно хранить локально, импортировать или загружать из интернета.

---

## 🔹 Создание функционального компонента

```javascript
function Greeting(props) {
  return <h1>Привет, {props.name}!</h1>;
}

export default Greeting;
```

> 📌 Компонент — это обычная JS-функция, которая принимает `props` и возвращает JSX.

---

## 🔹 Использование компонента

```javascript
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting name="Мирёкуб" />
      <Greeting name="React" />
    </div>
  );
}

export default App;
```

> 📌 Каждый вызов `<Greeting />` создаёт новый экземпляр компонента.

---

## 🔹 Работа с изображениями

### 1. Импорт локальных картинок

```javascript
import logo from "./assets/logo.png";

function Header() {
  return <img src={logo} alt="Логотип" />;
}
```

> 📌 В React изображения импортируются как модули.

### 2. Использование внешних ссылок

```javascript
function Avatar() {
  return <img src="https://somePhoto" alt="Аватар" />;
}
```

> 📌 Подходит для CDN или случайных картинок.

### 3. Картинки в `public` папке

```javascript
function Banner() {
  return <img src="/banner.jpg" alt="Баннер" />;
}
```

> 📌 Всё, что лежит в `public`, доступно напрямую по корневому пути.

---

## 🔹 Props и динамические картинки

```javascript
function Profile({ name, imageUrl }) {
  return (
    <div>
      <h2>{name}</h2>
      <img src={imageUrl} alt={name} />
    </div>
  );
}

export default Profile;
```

```javascript
function App() {
  return <Profile name="Mirka" imageUrl="/avatars/mirka.png" />;
}
```

> 📌 Таким образом можно передавать ссылки на изображения через `props`.

---

## ⚠️ Подводные камни

- ❗ Локальные картинки нужно импортировать, иначе React их не найдёт.
- ❗ Файлы из `public` не проходят обработку Webpack (например, оптимизацию).
- ❗ Всегда указывай `alt` для доступности.
- ❗ При использовании динамических путей убедись, что файл реально существует.

---

## ⚡ Что дальше

Следующая тема - 1.7. Работа с классовыми компонентами в React.

> ❗ Эта тема — теоретическая, практические задания пока не предусмотрены.
