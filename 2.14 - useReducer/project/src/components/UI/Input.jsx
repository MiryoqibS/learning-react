import React from "react"

export const Input = ({ handleChange, ...props }) => {
    return (
        <input
            className="px-4 py-2 rounded bg-transparent shadow-lg border-2 border-blue-600 outline-none font-semibold text-gray-900"
            onChange={handleChange}
            {...props}
        />
    )
}
