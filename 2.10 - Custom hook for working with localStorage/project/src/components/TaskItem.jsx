import React from 'react'

export const TaskItem = ({ task }) => {
    const { title } = task;
    return (
        <div className="flex">
            <p>{title}</p>
        </div>
    )
}
