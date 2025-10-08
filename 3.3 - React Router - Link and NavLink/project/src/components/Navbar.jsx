import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { HouseIcon, UserIcon, WorkflowIcon, InfoIcon, GamepadIcon, PackageIcon } from "lucide-react";
import { Logo } from "./Logo";

export const Navbar = () => {
    const NavLinkClass = ({ isActive }) => {
        return `flex items-center gap-2 text-xs font-semibold justify-center py-1 px-3 rounded-xl 
        cursor-pointer transition-colors duration-500
        ${isActive ? "bg-white text-gray-800 hover:bg-gray-300 shadow-lg shadow-black/30" : "text-white hover:bg-white hover:text-gray-800"}`;
    };

    const navigate = useNavigate();

    return (
        <div className="flex items-center justify-between w-full shadow-lg bg-neutral-800 rounded-full py-1 px-3">
            <Logo />

            <nav className="flex items-center gap-4">
                <NavLink className={NavLinkClass} to="/">
                    <HouseIcon size={16} />
                    Home
                </NavLink>
                <NavLink className={NavLinkClass} to="/work">
                    <WorkflowIcon size={16} />
                    Work
                </NavLink>
                <NavLink className={NavLinkClass} to="/about">
                    <InfoIcon size={16} />
                    About
                </NavLink>
                <NavLink className={NavLinkClass} to="/playground">
                    <GamepadIcon size={16} />
                    Playground
                </NavLink>
                <NavLink className={NavLinkClass} to="/resource">
                    <PackageIcon size={16} />
                    Resource
                </NavLink>
            </nav>

            <button
                onClick={() => navigate("/auth")}
                className="flex items-center gap-1 bg-white px-3 py-1 rounded-full text-xs font-semibold transition-colors cursor-pointer hover:bg-gray-300"
            >
                <UserIcon size={16} />
                Войти
            </button>
        </div>
    )
}
