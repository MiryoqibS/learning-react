import React from 'react'

export const Button = ({ children, handleClick, ...props }) => {
    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 rounded bg-blue-600 text-white flex items-center justify-center font-medium text-xs"
            {...props}
        >
            {children}
        </button>
    )
}
