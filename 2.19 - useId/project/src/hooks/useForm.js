import { useState } from "react";

export const useForm = () => {
    const [fields, setFields] = useState({});

    const handleChange = (key, value) => {
        if (value.trim().length === 0) return;
        setFields((prev) => ({ ...prev, [key]: value }))
    };

    const clearFields = () => {
        const clearedObject = {};
        for (const key in fields) {
            clearedObject[key] = "";
        };
        setFields(clearedObject);
    };

    const getFieldValue = (key) => {
        const value = fields[key] || "";
        return value;
    }

    return { fields, handleChange, clearFields, getFieldValue };
};