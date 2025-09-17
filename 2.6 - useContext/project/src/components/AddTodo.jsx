import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext';
import { useState } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const AddTodo = () => {
    const [todoText, setTodoText] = useState("");
    const { addTodo } = useContext(TodoContext);
    const { theme } = useContext(ThemeContext);

    const handleClick = () => {
        addTodo(todoText);
        setTodoText("");
    };

    return (
        <div className={`flex items-center justify-between px-6 py-2 rounded w-full ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"}`}>
            <input
                className={`bg-transparent outline-none border-none ${theme === "light" ? "placeholder:text-black" : "placeholder:text-white"}`}
                type="text"
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
                placeholder="Текст задачи..."
            />
            <button
                className="px-3 py-1 ml-2 rounded bg-green-700 text-white transition-colors cursor-pointer hover:bg-green-800"
                onClick={handleClick}
            >
                добавить
            </button>
        </div>
    );
};
