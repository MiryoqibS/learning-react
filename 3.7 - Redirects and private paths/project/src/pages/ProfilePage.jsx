import React, { useContext } from "react"
import { authContext } from "../contexts/authContext";

export const ProfilePage = () => {
    const { isAuth, user } = useContext(authContext);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-bold text-gray-900">Профиль</h1>
            <h3 className="text-xl text-gray-700">Никнейм: {user.username}</h3>
        </div>
    )
}
