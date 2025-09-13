import { useEffect, useState } from "react";
import { fetchMovies } from "../services/fetchMovies";

export const useFetchMovies = (query = "") => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies(query).then(data => setMovies(data.movies));
    }, [query]);

    return movies;
};