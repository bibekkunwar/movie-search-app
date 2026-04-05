import MovieCard from "./MovieCard";

function MovieGrid({movieList, modalHandler}) {

    return (
        <div className="flex overflow-x-auto gap-6">
            {movieList.map((movie) => (
                <MovieCard modalHandler= {modalHandler}
                key = {movie.id}
                title = {movie.title}
                poster_path = {movie.poster_path}
                overview = {movie.overview}
                />
            ))}
        </div>
    )
}

export default MovieGrid;