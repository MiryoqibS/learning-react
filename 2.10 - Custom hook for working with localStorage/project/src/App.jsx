import React from "react"
import { AddTask } from "./components/AddTask";
import { TasksList } from "./components/TasksList";

export const App = () => {
  return (
    <div className="w-full max-w-[500px] mx-auto flex flex-col">
      <AddTask />
      <TasksList />
    </div>
  )
};
