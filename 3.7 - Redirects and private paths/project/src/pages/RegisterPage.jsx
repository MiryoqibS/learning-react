import React from "react"
import { RegisterForm } from "../components/RegisterForm";

export const RegisterPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-900">Создайте аккаунт</h1>

            <RegisterForm />
        </div>
    )
}
