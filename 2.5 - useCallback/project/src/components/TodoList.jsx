import React, { memo } from 'react'
import { TodoItem } from './TodoItem';

export const TodoList = memo(({ todos, toggleTodo }) => {
    console.log("Рендер TodoList");

    return (
        <div className="w-full bg-blue-300 flex flex-col gap-6 mt-6 px-6 py-4">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
});