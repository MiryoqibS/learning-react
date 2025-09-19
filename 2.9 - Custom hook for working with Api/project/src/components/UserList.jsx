import React, { useEffect } from 'react'
import { useApi } from '../hooks/useApi'

export const UserList = () => {
    const { data, isLoading, error, get } = useApi("https://jsonplaceholder.typicode.com/");

    useEffect(() => {
        get("users");
    }, [get]);

    if (isLoading) {
        return (<p>Идёт загрузка...</p>)
    };

    if (error) {
        return (<p>Ошибка {error.message}</p>)
    };

    return (
        <div className="flex flex-col items-start gap-4 w-full max-w-[500px] py-6">
            {data && data.length && data.map((user) => (
                <div
                    key={user.id}
                    className="flex flex-col items-start gap-2 w-full bg-gray-300 rounded py-2 px-4"
                >
                    <p className="bg-gray-400 rounded py-0.5 px-2">{user.username}</p>
                    <p>{user.name}</p>
                    <p className="text-xs bg-gray-500 py-0.5 px-1 text-white rounded">{user.email}</p>
                </div>
            ))}
        </div>
    )
};
