import React, { useRef, useState } from 'react'
import { Tooltip } from '../Tooltip';

export const Button = ({ children }) => {
    const btnRef = useRef(null);
    const [show, setShow] = useState(false);

    return (
        <div className="relative inline-block">
            <button
                ref={btnRef}
                className="px-4 py-2 bg-blue-600 text-white rounded transition-colors cursor-pointer hover:bg-blue-800"
                onMouseEnter={() => setShow(true)}
                onMouseLeave={() => setShow(false)}
            >
                {children}
            </button>
            <Tooltip targetRef={btnRef} show={show}>Подсказка</Tooltip>
        </div>
    )
};