import React from "react";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-900">Войдите в аккаунт</h1>

            <LoginForm />
        </div>
    )
};
