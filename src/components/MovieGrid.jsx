import MovieCard from "./MovieCard";

function MovieGrid({movieList, modalHandler}) {

    return (
        <div className="flex flex-wrap gap-4 justify-center items-center">
            {movieList.map((movie) => (
                <MovieCard modalHandler= {modalHandler}
                key={movie.id}
                movie= {movie}
                />
            ))}
        </div>
    )
}

export default MovieGrid;