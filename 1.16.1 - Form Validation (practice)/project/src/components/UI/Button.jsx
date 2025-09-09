import React from 'react'

export const Button = ({ children, ...attributes }) => {
    return (
        <button {...attributes} className="rounded-md bg-blue-700 text-white font-medium text-xs py-2 px-4 transition-colors hover:cursor-pointer hover:bg-blue-800">
            {children}
        </button>
    );
};