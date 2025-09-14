import React from 'react';
import { CheckIcon, TrashIcon } from 'lucide-react';

export const TodoItem = ({ todo, onDelete, onCheck }) => {
    const { id, text, isChecked } = todo;

    return (
        <div className="group flex items-center justify-between gap-3 p-4 bg-white dark:bg-page-dark rounded-lg h-12 shadow-sm
        hover:shadow-md transition-shadow duration-300 border border-gray-100">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => onCheck(id)}
                    className={`p-1 rounded-full border-2 ${isChecked
                        ? "border-green-600 bg-green-500 text-white"
                        : "border-gray-300 hover:border-gray-400 dark:text-white"}
                    transition-colors duration-300`}
                >
                    <CheckIcon size={16} />
                </button>
                <p className={`${isChecked ? "line-through" : ""} text-text-light dark:text-text-dark`}>{text}</p>
            </div>
            <button
                onClick={() => onDelete(id)}
                className="opacity-0 group-hover:opacity-100 text-gray-400 hover:text-red-500 
                    transition-all duration-300 cursor-pointer"
            >
                <TrashIcon size={16} />
            </button>
        </div>
    );
};
