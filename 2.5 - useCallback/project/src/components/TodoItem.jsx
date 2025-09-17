import React, { memo } from 'react'

export const TodoItem = memo(({ todo, toggleTodo }) => {
    const { id, text, completed } = todo;

    console.log("Рендер TodoItem:", text);

    return (
        <div className="w-full flex items-center gap-6">
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodo(id)}
            />
            <p className="text-blue-700 font-semibold">{text}</p>
        </div>
    );
});
