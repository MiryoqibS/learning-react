import React from "react"

export const MovieCard = ({ movieData }) => {
    const { title, description, thumbnail } = movieData;
    return (
        <div className="w-full flex flex-col gap-6 items-center cursor-pointer">
            <h3 className="text-center text-xl font-bold text-white h-10">{title}</h3>
            <div className="w-full overflow-hidden rounded">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-100 object-cover transition duration-300 hover:scale-105"
                />
            </div>
            <p className="text-xs font-semibold line-clamp-3 text-white">{description}</p>
        </div>
    );
};
