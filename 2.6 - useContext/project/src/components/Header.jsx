import React from "react";
import { ThemeContext } from "../contexts/ThemeContext"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { user } = useContext(UserContext);
  const { username } = user;

  return (
    <header
      className={`flex items-center justify-between gap-4 p-4 mt-6 rounded ${theme === "light" ? "bg-gray-200" : "bg-gray-800 text-white"}`}
    >
      <h3 className="text-xl">Header - {theme} mode</h3>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 ml-2 rounded bg-blue-500 text-white transition-colors cursor-pointer hover:bg-blue-700"
        >
          сменить тему
        </button>
        {user && <p>{username}</p>}
      </div>

    </header>
  );
};
