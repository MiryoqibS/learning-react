import React from "react";

export const Loader = () => {
    return (
        <div className="flex justify-center items-center min-h-[100px]">
            <div className="w-10 h-10 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
    );
};
