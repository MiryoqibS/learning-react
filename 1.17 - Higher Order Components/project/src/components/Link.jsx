import React from 'react'

export const Link = ({ clickCount, clickIncrement }) => {
    return (
        <a href="#!" onClick={(e) => {
            e.preventDefault();
            clickIncrement();
        }}>
            Кликнуто {clickCount}
        </a>
    );
};