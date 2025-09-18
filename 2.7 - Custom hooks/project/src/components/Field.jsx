import React from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { UserIcon } from "lucide-react";

export const Field = () => {
    const [username, setUsername] = useLocalStorage("username", "");

    return (
        <div className="flex items-center gap-4 bg-gray-200 py-2 px-6 rounded mt-6">
            <UserIcon size={16} />
            <input
                type="text"
                value={username}
                placeholder="Имя пользователя"
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none border-none"
            />
        </div>
    )
}
