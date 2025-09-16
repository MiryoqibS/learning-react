import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [] }) => {
    return (
        <div className="max-w-[800px] mx-auto flex flex-col gap-6 py-4">
            {
                todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))
            }
        </div>
    );
};
