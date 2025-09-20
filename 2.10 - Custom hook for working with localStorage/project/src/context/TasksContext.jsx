import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const TasksContext = createContext(null);

export const TasksProvider = ({ children }) => {
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const addTask = (title) => {
        const task = {
            title,
            id: new Date(),
            completed: false,
        };
        setTasks((prev) => [...prev, task]);
    };

    const deleteTask = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    return (
        <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    );
};