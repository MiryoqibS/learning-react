export const fetchMovies = async (query) => {
    try {
        const response = await fetch("/data/movies.json");
        const data = await response.json();
        console.log(data);

        const filtered = query ?
            data.filter(movie =>
                movie.title.toLowerCase().includes(query.toLowerCase())
            ) : data;

        return {
            status: "success",
            movies: filtered,
        };
    } catch (error) {
        return {
            status: "error",
            message: `Произошла ошибка: ${error.message}`,
        };
    };
}