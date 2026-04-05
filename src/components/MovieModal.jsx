function MovieModal({ selectedMovie, closeModal }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="bg-[#222] rounded-xl max-w-lg p-4 relative overflow-y-auto max-h-[90vh]">
        <button
          className="bg-red-700 text-white px-3 py-1 text-sm rounded-xl absolute top-4 right-4"
          onClick={closeModal}
        >
          close
        </button>

        <h2 className="text-2xl mb-2">{selectedMovie.title}</h2>
        <img className="rounded-xl w-full h-80 mb-6"
          src={`https://image.tmdb.org/t/p/w200${selectedMovie.poster_path}`}
          alt={selectedMovie.title}
        />
        <p className="p-4">{selectedMovie.overview}</p>

        
      </div>
    </div>
  );
}

export default MovieModal;
