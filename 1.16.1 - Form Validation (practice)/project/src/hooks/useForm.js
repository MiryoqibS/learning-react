import { useState } from "react";
import { validators } from "../utils/validators";

export function useForm(initialValue) {
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState({});

    const handleChange = (key, value, ...otherValues) => {
        setValues(prev => ({ ...prev, [key]: value }));

        if (key === "repeatPassword") {
            const error = validators[key](value, ...otherValues);
            setErrors(prev => ({ ...prev, [key]: error }));
        } else if (validators[key]) {
            const error = validators[key](value);
            setErrors(prev => ({ ...prev, [key]: error }));
        };
    }

    const clearValues = () => {
        const keys = Object.keys(values);
        const clearedValues = {};
        keys.forEach(key => {
            clearedValues[key] = "";
        });

        setValues(clearedValues);
    };

    const isValid = () => {
        const isFieldsFilled = Object.values(values).every(v => v.trim().length > 0);
        const noErrors = Object.values(errors).every(err => !err);

        return isFieldsFilled && noErrors;
    };

    return { values, errors, handleChange, isValid, clearValues }
}