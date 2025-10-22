import React from "react"
import { AddTodo } from "./AddTodo";
import { TodoList } from "./TodoList";
import { memo } from "react";

export const TodoContainer = memo(() => {
    return (
        <div className="max-w-[600px] mx-auto flex flex-col items-center gap-6">
            <AddTodo />
            <TodoList />
        </div>
    );
});
