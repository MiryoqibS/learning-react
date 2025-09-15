import React from 'react';
import { PlayIcon, PauseIcon, RewindIcon } from "lucide-react";

export const PlayerControls = ({ isPlaying, playMusic, pauseMusic, forwardMusic, backwardMusic }) => {
    return (
        <div className="flex items-center justify-center gap-6">
            {/* Кнопка для перемотки назад */}
            <button
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                onClick={backwardMusic}
            >
                <RewindIcon size={24} />
            </button>

            {isPlaying ?
                <button
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                    onClick={pauseMusic}
                >
                    <PauseIcon />
                </button> :
                <button
                    className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                    onClick={playMusic}
                >
                    <PlayIcon />
                </button>
            }

            {/* Кнопка для перемотки вперед */}
            <button
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
                onClick={forwardMusic}
            >
                <RewindIcon size={24} className="rotate-180" />
            </button>
        </div>
    );
};
