import { useCallback, useEffect, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    fetch("/data/todos.json")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  // Переключение задачи
  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(
        (todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  // Фильтрация задач
  const getFilteredTodos = useCallback(() => {
    switch (filter) {
      case "completed":
        return todos.filter(todo => todo.completed);
      case "active":
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  if (todos.length === 0) {
    return (
      <p>Идёт загрузка...</p>
    );
  };

  return (
    <div className="max-w-[500px] mx-auto flex flex-col gap-6 py-6">
      <header className="flex items-center justify-center gap-8">
        <button
          className="bg-blue-600 text-white rounded-sm py-2 px-6 flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition-colors"
          onClick={() => setFilter("all")}
        >
          все
        </button>
        <button
          className="bg-blue-600 text-white rounded-sm py-2 px-6 flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition-colors"
          onClick={() => setFilter("active")}
        >
          активные
        </button>
        <button
          className="bg-blue-600 text-white rounded-sm py-2 px-6 flex items-center justify-center font-semibold cursor-pointer hover:bg-blue-700 transition-colors"
          onClick={() => setFilter("completed")}
        >
          выполненные
        </button>
      </header>
      <TodoList
        todos={getFilteredTodos()}
        toggleTodo={toggleTodo}
      />
    </div>
  )
};
