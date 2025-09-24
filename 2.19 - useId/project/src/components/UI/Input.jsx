import React from 'react'

export const Input = ({ handleChange, ...props }) => {
    return (
        <input
            {...props}
            onChange={handleChange}
            className="rounded px-4 py-0.5 font-semibold text-gray-900 placeholder:text-gray-900 border-2 border-blue-600 outline-none text-md w-full"
        />
    )
}
