import React from "react"

export const LoginForm = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
                <label>Email: </label>
                <input
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Электронная почта пользователя"
                />
            </div>
            <div className="flex flex-col">
                <label>Password: </label>
                <input
                    type="password"
                    value={formData.password || ""}
                    onChange={(e) => handleChange("password", e.target.value)}
                    placeholder="Пароль пользователя"
                />
            </div>
            <button type="submit">Авторизация</button>
        </form>
    )
};
