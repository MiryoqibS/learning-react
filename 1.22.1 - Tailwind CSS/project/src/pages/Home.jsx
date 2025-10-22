import React, { useState } from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import { MovieList } from "../components/MovieList";
import { SearchBar } from "../components/SearchBar";

export const Home = () => {
    const [query, setQuery] = useState("");
    const movies = useFetchMovies(query);

    const searchBarInputProps = {
        onChange: (e) => setQuery(e.target.value),
        value: query,
        placeholder: "названые фильма",
        attributes: {
            type: "text",
        },
    };

    return (
        <div className="flex flex-col gap-20 mt-20">
            <SearchBar inputProps={searchBarInputProps} />
            {movies.length > 0 ?
                <MovieList movies={movies} />
                :
                <p className="text-white text-xl font-bold">Идёт загрузка...</p>}
        </div>
    );
};
