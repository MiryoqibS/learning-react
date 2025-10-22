import React, { useState, useTransition } from "react"
import { Button } from "./UI/Button";

export const Counter = () => {
    const [isPending, startTransition] = useTransition();
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        startTransition(() => {
            setCount((prev) => prev + 1);
        });
    };

    const handleDecrement = () => {
        startTransition(() => {
            setCount((prev) => prev - 1);
        });
    };

    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold text-gray-900">{isPending ? "Загрузка..." : `Счётчик: ${count}`}</h3>
            <div className="flex items-center gap-2">
                <Button handleClick={handleIncrement}>Добавить</Button>
                <Button handleClick={handleDecrement}>Уменьшить</Button>
            </div>
        </div>
    )
};