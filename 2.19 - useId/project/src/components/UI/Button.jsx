import React from "react"

export const Button = ({ children, handleClick, ...props }) => {
    return (
        <button
            className="px-4 py-2 rounded bg-blue-600 cursor-pointer text-white font-medium text-xs transition-colors hover:bg-blue-800"
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};
