import React, { useState } from "react"
import { authContext } from "../contexts/authContext";

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = () => {
        setUser({
            username: "Miryoqib",
        });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <authContext.Provider value={{
            isAuth: !!user,
            user,
            login,
            logout
        }}>
            {children}
        </authContext.Provider>
    )
}
