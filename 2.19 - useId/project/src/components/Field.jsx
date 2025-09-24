import React from 'react';
import { useId } from 'react';
import { Input } from './UI/Input';

export const Field = ({ fieldName, fieldTitle, handleChange, inputType = "text", inputValue }) => {
    const fieldId = `${useId()}-${fieldName}`;

    return (
        <div className="flex flex-col items-start gap-2">
            <label htmlFor={fieldId} className="text-2xl font-medium text-gray-900">{fieldTitle}: </label>
            <Input
                handleChange={(e) => handleChange(fieldName, e.target.value)}
                id={fieldId}
                type={inputType}
                value={inputValue}
                placeholder={`Введите...`}
            />
        </div>
    )
}
