import React from 'react';
import { TimerIcon, TimerOffIcon, TimerResetIcon } from "lucide-react";

export const TimerControls = ({ isStarted, startTimer, stopTimer, resetTimer }) => {
    return (
        <div className="flex items-center justify-center gap-4">
            {isStarted ?
                <button
                    className="flex items-center justify-center gap-2 text-white py-2 px-6 rounded-full bg-red-500 font-medium"
                    onClick={stopTimer}
                >
                    <TimerOffIcon size={24} />
                    Stop
                </button>
                :
                <button
                    className="flex items-center justify-center gap-2 text-white py-2 px-6 rounded-full bg-purple-500 font-medium"
                    onClick={startTimer}
                >
                    <TimerIcon size={24} />
                    Start
                </button>
            }

            <button
                className="flex items-center justify-center gap-2 text-gray-400 bg-gray-300 py-2 px-6 rounded-full font-medium"
                onClick={resetTimer}
            >
                <TimerResetIcon />
                Reset
            </button>
        </div>
    );
};
