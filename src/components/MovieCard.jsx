function MovieCard({ title, poster_path, modalHandler, overview }) {

    return (
        <div onClick={() => modalHandler({ title, poster_path, overview })} className="shrink-0 w-36 bg-[#222] rounded-xl">
            
            <img className="w-full"
              src={`https://image.tmdb.org/t/p/w200${poster_path}`}
              alt={title}
            />
            <h2 className="px-2 py-1 text-sm">{title}</h2>
            {/* <p>{overview}</p> */}
        </div>
    )
}

export default MovieCard;
