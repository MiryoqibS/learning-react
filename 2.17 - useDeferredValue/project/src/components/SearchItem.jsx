import React from 'react'

export const SearchItem = ({ query }) => {
    const startTime = performance.now();

    while (performance.now() - startTime < 10) {
        // Цикл ждёт 10 мс
    };

    console.log("Рендер SearchItem");


    return (
        <div className="flex text-blue-700 font-medium text-md">
            <p>Введено {query}</p>
        </div>
    )
}
