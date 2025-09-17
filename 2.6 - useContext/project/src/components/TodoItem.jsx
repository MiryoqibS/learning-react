import React from 'react'

export const TodoItem = ({ todo, deleteTodo }) => {
    const { text } = todo;

    return (
        <div className="flex items-center w-full justify-between gap-6">
            <h3>{text}</h3>
            <button
                onClick={deleteTodo}
                className="py-2 px-6 bg-red-500 text-white flex items-center justify-center rounded cursor-pointer transition-colors hover:bg-red-600"
            >
                удалить
            </button>
        </div>
    )
}
