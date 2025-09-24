import React from 'react'

export const Button = ({ children, handleClick }) => {
    return (
        <button
            onClick={handleClick}
            className="px-4 py-2 bg-blue-600 text-xs font-medium text-white rounded cursor-pointer transition-colors hover:bg-blue-800"
        >
            {children}
        </button>
    );
};