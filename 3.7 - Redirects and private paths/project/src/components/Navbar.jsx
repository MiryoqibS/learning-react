import React, { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { authContext } from "../contexts/authContext";
import { LogOutIcon, UserIcon } from "lucide-react";

export const Navbar = () => {
    const { isAuth, user, logout } = useContext(authContext);
    const navLinkClass = ({ isActive }) => {
        return `font-medium cursor-pointer transition-colors ${isActive ? "text-indigo-400 hover:text-indigo-500" : "text-white hover:text-indigo-300"}`;
    };
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        setTimeout(() => navigate("/"), 0);
    }

    return (
        <nav className="flex items-center justify-between gap-4 bg-gray-700 mt-6 py-4 px-6 rounded">
            <div className="flex items-center gap-4">
                <NavLink
                    className={navLinkClass}
                    to="/"
                >
                    Главная страница
                </NavLink>

                <NavLink
                    className={navLinkClass}
                    to="/about"
                >
                    Страница о нас
                </NavLink>
            </div>

            <div className="flex items-center gap-4">
                {isAuth ? (
                    <>
                        <div
                            onClick={() => navigate("/profile")}
                            className="flex items-center gap-1 text-white cursor-pointer transition-colors hover:text-gray-400"
                        >
                            <UserIcon size={16} />
                            <p className="text-md font-medium">{user.username}</p>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="text-white cursor-pointer transition-colors hover:text-red-500">
                            <LogOutIcon size={16} />
                        </button>
                    </>

                ) : (
                    <>
                        <button
                            onClick={() => navigate("/auth")}
                            className="px-4 py-1 text-xs font-medium rounded bg-white text-gray-900"
                        >Войти</button>
                        <button
                            onClick={() => navigate("/auth/register")}
                            className="px-4 py-1 text-xs font-medium rounded bg-white text-gray-900"
                        >Создать</button>
                    </>
                )}
            </div>
        </nav>
    )
}
