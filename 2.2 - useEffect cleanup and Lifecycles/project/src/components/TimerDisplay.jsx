import React from 'react'

export const TimerDisplay = ({ time }) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time / 3600) / 60);
    const seconds = time % 60;

    const pad = (num) => String(num).padStart(2, "0");

    return (
        <div className="flex items-center gap-2 justify-center py-2 px-4">
            <div className="flex items-center justify-center text-gray-900 text-4xl font-semibold w-12 h-12 tracking-wide rounded">
                <p>{pad(hours)}</p>
            </div>
            <p className="text-xl font-bold text-gray-900">:</p>
            <div className="flex items-center justify-center text-gray-900 text-4xl font-semibold w-12 h-12 tracking-wide rounded">
                <p>{pad(minutes)}</p>
            </div>
            <p className="text-xl font-bold text-gray-900">:</p>
            <div className="flex items-center justify-center text-gray-900 text-4xl font-semibold w-12 h-12 tracking-wide rounded">
                <p>{pad(seconds)}</p>
            </div>
        </div>
    )
};
