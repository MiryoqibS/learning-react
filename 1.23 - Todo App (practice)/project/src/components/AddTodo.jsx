import React, { useState } from 'react';
import { PlusIcon } from "lucide-react";

export const AddTodo = ({ onAdd }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim().length < 5) {
            console.log("длина текста задачи меньше чем 5 символов!");
            return;
        };
        onAdd(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-6">
            <div className="flex items-stretch bg-white rounded-lg shadow-sm 
            overflow-hidden border border-gray-100 
            focus-within:ring-2 focus-within:ring-blue-500">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Задача..."
                    className="flex-1 p-3 text-gray-700 
                    dark:bg-page-dark dark:text-text-dark outline-none placeholder-gray-400"
                />

                <button type="submit" className="flex items-center justify-center cursor-pointer px-2
                    text-white
                    bg-btn-light hover:bg-btn-light-hover 
                    dark:bg-btn-dark dark:hover:bg-btn-dark-hover
                    transition-colors duration-300">
                    <PlusIcon size={24} />
                </button>
            </div>
        </form>
    );
};
