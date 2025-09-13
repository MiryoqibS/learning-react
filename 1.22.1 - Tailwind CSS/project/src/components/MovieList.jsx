import React from 'react';
import { MovieCard } from './MovieCard';

export const MovieList = ({ movies }) => {
    return (
        <div className="grid grid-cols-5 gap-x-4 gap-y-10">
            {movies.map((movie) => (
                <MovieCard key={movie.title} movieData={movie} />
            ))}
        </div>
    );
};
