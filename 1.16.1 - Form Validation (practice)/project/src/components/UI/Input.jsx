import React from 'react'

export const Input = ({ attributes, additionalClasses }) => {
    return (
        <input {...attributes} className={`rounded-lg border-2 border-blue-700 outline-none px-3 py-2 text-sm ${additionalClasses.join(" ")}`} />
    )
}
