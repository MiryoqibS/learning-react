import React, { useEffect, useState } from 'react'
import { TimerDisplay } from './TimerDisplay';
import { TimerControls } from './TimerControls';

export const Timer = () => {
    const [isTimerStarted, setIsTimerStarted] = useState(false);
    const [time, setTime] = useState(0);

    // Эффект для запуска и очистки таймера
    useEffect(() => {
        let intervalId;

        if (isTimerStarted) {
            intervalId = setInterval(() => {
                setTime((prev) => prev + 1);
            }, 1000);
        };

        // очистка
        return () => clearInterval(intervalId);
    }, [isTimerStarted]);

    const startTimer = () => setIsTimerStarted(true);
    const stopTimer = () => setIsTimerStarted(false);
    const resetTimer = () => setTime(0);

    return (
        <div className="flex flex-col gap-8 bg-white w-1/2 mt-6 mx-auto py-3 px-4 rounded shadow-md">
            <TimerDisplay time={time} />
            <TimerControls
                isStarted={isTimerStarted}
                setIsStarted={setIsTimerStarted}
                startTimer={startTimer}
                stopTimer={stopTimer}
                resetTimer={resetTimer}
            />
        </div>
    );
};