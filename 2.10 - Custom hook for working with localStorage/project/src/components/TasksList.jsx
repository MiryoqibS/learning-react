import React, { useContext } from "react"
import { TasksContext } from "../context/TasksContext";
import { TaskItem } from "./TaskItem";

export const TasksList = () => {
    const { tasks } = useContext(TasksContext);

    if (!tasks || tasks.length === 0) {
        return (<p>Задач нет</p>)
    };

    return (
        <div className="flex flex-col gap-4">
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </div>
    );
}
