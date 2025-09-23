import React, { useReducer, useState } from 'react'
import { Button } from './UI/Button'
import { Input } from './UI/Input'
import { counterReducer, initialState } from '../reducers/counterReducer';

export const Counter = () => {
    const [state, dispatch] = useReducer(counterReducer, initialState);
    const [inputValue, setInputValue] = useState("");

    const handleSetValue = (e) => {
        e.preventDefault();
        
        const number = parseInt(inputValue);
        if (!isNaN(number)) {
            dispatch({ type: "SET_VALUE", payload: number })
        };

        setInputValue("");
    };

    const handleDecrement = () => {
        dispatch({ type: "DECREMENT" })
    };

    const handleIncrement = () => {
        dispatch({ type: "INCREMENT" });
    };

    const handleReset = () => {
        dispatch({ type: "RESET" });
    };

    return (
        <div className="flex flex-col items-start gap-4">
            <h3 className="text-xl font-semibold">Счётчик: {state.count}</h3>
            <div className="flex items-center gap-2">
                <Button handleClick={handleIncrement}>Добавить</Button>
                <Button handleClick={handleReset}>Сбросить</Button>
                <Button handleClick={handleDecrement}>Убавить</Button>
            </div>
            <form onSubmit={handleSetValue} className="flex items-center gap-4">
                <Input
                    type="number"
                    placeholder="Установить значение"
                    value={inputValue}
                    handleChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="submit">Применить</Button>
            </form>
        </div>
    )
}
