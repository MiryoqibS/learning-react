import React from "react"
import { useForm } from "../hooks/useForm"
import { Button } from "./UI/Button";
import { Field } from "./Field";

export const RegisterForm = () => {
    const { fields, handleChange, clearFields, getFieldValue } = useForm();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(fields);
        clearFields();
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 shadow-lg rounded-xl mt-6 mx-auto max-w-[600px] border-2 border-gray-200 rounded px-6 py-4"
        >

            <Field
                fieldName={"name"}
                fieldTitle="Имя"
                handleChange={handleChange}
                inputValue={getFieldValue("name")}
            />

            <Field
                fieldName={"email"}
                fieldTitle="Электронная почта"
                handleChange={handleChange}
                inputValue={getFieldValue("email")}
                inputType="email"
            />

            <Field
                fieldName={"password"}
                fieldTitle="Пароль"
                handleChange={handleChange}
                inputValue={getFieldValue("password")}
                inputType="password"
            />

            <Button
                type="submit"
            >Отправить</Button>
        </form>
    )
}
