"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
    const [links, setLinks] = useState([
        { name: "Главная", href: "/" },
        { name: "Панель пользователя", href: "/dashboard" },
        { name: "Об нас", href: "/about" },
    ])
    return (
        <nav className="flex items-center justify-between py-2">
            <h1 className="text-xl font-bold">Logo</h1>
            <div className="flex items-center gap-4">
                {links.map(link => (
                    <Link
                        key={link.href}
                        className="font-medium text-xs"
                        href={link.href}
                    >{link.name}</Link>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;