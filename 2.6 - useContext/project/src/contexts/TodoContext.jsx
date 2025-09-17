import { useCallback } from "react";
import { useId } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const TodoContext = createContext(null);

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch("/data/todos.json")
            .then(response => response.json())
            .then(data => setTodos(data));
    }, []);

    const addTodo = useCallback((text) => {
        const todo = {
            text,
            id: Date.now(),
            completed: false,
        };

        setTodos((prev) => [...prev, todo]);
    }, []);

    const deleteTodo = useCallback((id) => {
        setTodos((prev) => prev.filter(todo => todo.id !== id));
    }, []);

    return (
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider >
    )
};