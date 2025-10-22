import React from "react"
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header className="flex flex-col gap-y-6 items-center justify-center bg-gray-800 mt-10 py-6 rounded">
            <h1 className="text-3xl font-bold text-white">MovieFun</h1>
            <nav className="flex gap-4 items-center">
                <Link className="text-white" to={"/"}>Главная</Link>
            </nav>
        </header>
    );
};
