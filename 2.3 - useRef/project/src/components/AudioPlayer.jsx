import React from 'react';
import { useRef } from 'react';
import { PlayerControls } from './PlayerControls';
import { ArrowLeftIcon, ActivityIcon } from "lucide-react";
import { useState } from 'react';
import musicSrc from "../assets/music/music.mp3";
import discImg from "../assets/disc.png";

export const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const playerRef = useRef(null);

    // форматирование mm:ss
    const formatTime = (time) => {
        if (!time || isNaN(time)) return "00:00";
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    // Проигрывать музыку
    const playMusic = () => {
        if (playerRef?.current) {
            setIsPlaying(true);
            playerRef.current.play();
        };
    };

    // Приостановить музыку
    const pauseMusic = () => {
        if (playerRef?.current) {
            setIsPlaying(false);
            playerRef.current.pause();
        };
    };

    // Обновляем прогресс каждую секунду
    const handleTimeUpdate = () => {
        const current = playerRef.current.currentTime;
        const total = playerRef.current.duration;
        setCurrentTime(current);
        setDuration(total);
        if (total > 0) {
            setProgress((current / total) * 100);
        };
        if (current === total) {
            setProgress(0);
            setIsPlaying(false);
            setCurrentTime(0);
        }
    };

    // Перемотка при движение ползунка
    const handleSeek = (e) => {
        const percent = e.target.value;
        const total = playerRef.current.duration;
        playerRef.current.currentTime = (percent / 100) * total;
        setProgress(percent);
    }

    // Перемотка на 15 секунд назад
    const backwardMusic = () => {
        const current = playerRef.current.currentTime;
        playerRef.current.currentTime = current - 15;
        setCurrentTime(current);
    };

    // Перемотка на 15 секунд вперед
    const forwardMusic = () => {
        const current = playerRef.current.currentTime;
        playerRef.current.currentTime = current + 15;
        setCurrentTime(current);
    };

    // Ускорение аудио

    return (
        <div className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-900 
        max-w-[400px] h-[90vh] mx-auto mt-6 rounded-3xl overflow-hidden
        flex flex-col gap-5 py-6 px-4 
        ">
            <header className="flex items-center justify-between text-white">
                <ArrowLeftIcon size={24} />
                <p className="font-medium">Playing Now</p>
                <ActivityIcon size={16} />
            </header>

            <div className="flex flex-col gap-8">
                {/* тег с аудио */}
                <audio
                    src={musicSrc}
                    ref={playerRef}
                    onTimeUpdate={handleTimeUpdate}
                ></audio>

                <div className="flex items-center justify-center bg-gray-900 rounded-xl px-6 py-2">
                    <img
                        className="w-[90%]"
                        src={discImg}
                    />
                </div>

                <div className="flex flex-col items-center justify-center gap-4">
                    {/* Прогресс бар */}
                    <div className="w-full">
                        <div className="flex items-center justify-between text-white text-xs">
                            <p>{formatTime(currentTime)}</p>
                            <p>{formatTime(duration)}</p>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={progress}
                            onChange={handleSeek}
                            className="w-full"
                        />
                    </div>

                    <PlayerControls
                        isPlaying={isPlaying}
                        playMusic={playMusic}
                        pauseMusic={pauseMusic}
                        forwardMusic={forwardMusic}
                        backwardMusic={backwardMusic}
                    />
                </div>
            </div>

        </div>
    );
};
