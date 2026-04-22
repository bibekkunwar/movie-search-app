function MovieCard({ modalHandler, movie }) {

    return (
        <div onClick={() => modalHandler( movie )} className="shrink-0 w-36 bg-[#222] rounded-xl">
            
          {movie.poster_path ?   <img className="w-full"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              alt={movie.title}
            />
        :
        <p>No Image Available</p> }
            <h2 className="px-2 py-1 text-sm">{movie.title}</h2>
        </div>
    )
}

export default MovieCard;
