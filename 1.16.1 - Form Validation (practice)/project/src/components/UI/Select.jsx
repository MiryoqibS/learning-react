import React from 'react'
import { ErrorText } from './ErrorText'

export const Select = ({ label, value, options = [], onChange = () => { }, error }) => {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-xl">{label}</p>

            <select value={value} onChange={onChange} className="rounded-lg border-2 border-blue-700 outline-none px-3 py-2">
                <option value="">...Выберите год</option>
                {options.map(({ value }) => (
                    <option key={value} value={value}>
                        {value}
                    </option>
                ))}
            </select>

            {error && <ErrorText>{error}</ErrorText>}
        </div>
    )
}
