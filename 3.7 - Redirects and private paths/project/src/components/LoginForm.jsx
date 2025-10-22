import React, { useContext } from "react"
import { authContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const { login } = useContext(authContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/profile");
    };

    return (
        <div>
            <button
                onClick={handleLogin}
                className="px-4 py-1 rounded bg-indigo-600 
                text-white font-medium text-xs transition-colors 
                cursor-pointer hover:bg-indigo-700"
            >Войти</button>
        </div>
    )
}
