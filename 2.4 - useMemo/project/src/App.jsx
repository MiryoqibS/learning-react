import React, { useEffect, useMemo, useState } from "react";
import { TodoList } from "./components/TodoList";

export function App() {
  const [todos, setTodos] = useState([]);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(response => response.json())
      .then(data => setTodos(data));
  }, []);

  const sortedTodos = useMemo(() => {
    return [...todos].sort((a, b) => a.completed - b.completed);
  }, [todos]);

  if (todos.length <= 0) {
    return (
      <p>Идёт загрузка...</p>
    );
  };

  return (
    <div className="flex flex-col gap-10 items-center justify-center py-6">
      <button
        className="flex items-center justify-center py-2 px-4 rounded-sm text-white cursor-pointer transition-colors bg-blue-500 hover:bg-blue-600"
        onClick={() => setIsSorted(prev => !prev)}
      >{isSorted ? "Рассортировать" : "Отсортировать"}</button>

      <TodoList
        todos={isSorted ? sortedTodos : todos}
      />
    </div>
  )
}
