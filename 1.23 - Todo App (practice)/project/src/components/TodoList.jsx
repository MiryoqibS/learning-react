import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDelete, onCheck }) => {
    return (
        <div className="flex flex-col gap-3">
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    onDelete={onDelete}
                    todo={todo}
                    onCheck={onCheck}
                />
            ))}
        </div>
    );
};
