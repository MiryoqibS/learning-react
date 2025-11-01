"use client";

import { useEffect, useState } from "react";

const DashboardPage = () => {
    const [name, setName] = useState("");
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        const defaultValue = window.innerWidth;
        setWindowWidth(defaultValue);
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Панель пользователя</h1>
            <div className="mt-6 space-y-4">
                <label className="block mb-2">Введите ваше имя:</label>
                <input
                    className="p-2 border rounded"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <p className="mt-2">Привет, {name || "гость"}!</p>
            </div>
            <p className="mt-4">Ширина окна: {windowWidth}px</p>
        </div>
    );
}

export default DashboardPage;