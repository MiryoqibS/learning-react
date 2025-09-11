import React from 'react'

export const Button = ({ clickCount, clickIncrement }) => {
    return (
        <button onClick={clickIncrement}>
            Кликнуто {clickCount} раз
        </button>
    );
};
