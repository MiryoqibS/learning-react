import React, { useContext, useState } from "react"
import { TasksContext } from "../context/TasksContext";

export const AddTask = () => {
    const [title, setTitle] = useState("");
    const { addTask } = useContext(TasksContext);

    return (
        <div className="flex items-center">
            <input
                type="text"
                placeholder="Заголовок задачи..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button
                onClick={() => {
                    addTask(title);
                    setTitle("");
                }}
            >Добавить</button>
        </div>
    )
}
