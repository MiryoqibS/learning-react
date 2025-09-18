import { useState } from "react";

export const useForm = (initialValue) => {
    const [formData, setFormData] = useState(initialValue);

    const handleChange = (key, value) => {
        setFormData((prev) => ({ ...prev, [key]: value }));
    };

    return { formData, handleChange };
};