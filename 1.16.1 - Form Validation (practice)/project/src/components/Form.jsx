import React from 'react'
import { Field } from './UI/Field'
import { useForm } from '../hooks/useForm'
import { Button } from './UI/Button';
import { Select } from './UI/Select';

export const Form = () => {
    const { values, errors, handleChange, isValid, clearValues } = useForm({
        username: "",
        email: "",
        password: "",
        repeatPassword: "",
        graduationYear: "",
    });

    const years = Array.from({ length: 10 }, (_, i) => {
        const currentYear = new Date().getFullYear();
        return { value: currentYear + i }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isValid()) {
            console.log("Успешные данные");
            console.log(values["username"]);
            console.log(values["email"]);
            console.log(values["password"]);
            console.log(values["repeatPassword"]);
            clearValues();
        } else {
            console.log("Ошибка валидации");
            console.log(errors);
        };
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-1/3 mx-auto bg-blue-100 py-4 px-4 rounded-xl shadow-blue-950">
            <Field
                label={"имя пользователя"}
                inputProps={{
                    type: "text",
                    placeholder: "...",
                    onChange: (e) => handleChange("username", e.target.value),
                    value: values["username"],
                }}
                error={errors["username"]}
            />

            <Field
                label={"электронная почта"}
                inputProps={{
                    type: "email",
                    placeholder: "...",
                    onChange: (e) => handleChange("email", e.target.value),
                    value: values["email"],
                }}
                error={errors["email"]}
            />

            <Field
                label={"пароль"}
                inputProps={{
                    type: "password",
                    placeholder: "...",
                    onChange: (e) => handleChange("password", e.target.value),
                    value: values["password"],
                }}
                error={errors["password"]}
            />

            <Field
                label={"подтвердите пароль"}
                inputProps={{
                    type: "password",
                    placeholder: "...",
                    onChange: (e) => handleChange("repeatPassword", e.target.value, values["password"]),
                    value: values["repeatPassword"],
                }}
                error={errors["repeatPassword"]}
            />

            <Select
                label={"дата окончания учебного заведения"}
                value={values["graduationYear"]}
                options={years}
                onChange={(e) => handleChange("graduationYear", e.target.value)}
                error={errors["graduationYear"]}
            />

            <Button type={"submit"}>Отправить</Button>
            <Button type={"button"} onClick={clearValues}>Очистить форму</Button>
        </form>
    )
}
