import React from 'react'

export const Button = ({ children, handleClick }) => {
    return (
        <button
            className="px-4 py-2 rounded text-white font-medium text-xs bg-blue-600 transition-colors cursor-pointer hover:bg-blue-700"
            onClick={handleClick}
        >
            {children}
        </button>
    );
};
