import React from "react"
import { useContext } from "react"
import { TodoContext } from "../contexts/TodoContext";
import { TodoItem } from "./TodoItem";
import { ThemeContext } from "../contexts/ThemeContext";

export const TodoList = () => {
    const { todos, deleteTodo } = useContext(TodoContext);
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`flex flex-col w-full mx-auto gap-6 px-6 py-4 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"}`}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} deleteTodo={() => deleteTodo(todo.id)} />
            ))}
        </div>
    );
};
