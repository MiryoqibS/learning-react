import React from "react"

export const TodoItem = ({ todo }) => {
    const { title, completed } = todo;
    return (
        <div className="flex items-center gap-6 justify-between w-full">
            <p className="text-xs">{title}</p>
            <p>{completed ? "выполнено" : "не выполнено"}</p>
        </div>
    );
};
