import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleEventChange(e) {
    setSearchTerm(e.target.value);
  }

  //modal open and close

  function modalHandler(movie) {
    setSelectedMovie(movie);
  }

  function closeModal() {
    setSelectedMovie(null);
  }

  async function handleSearch() {
    setError(null);
    setLoading(true);

    try {
      if (searchTerm === "") {
        setError("Please Enter a Movie Name");
        setMovieList([]);
        return;
      }

    
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
      );

      if (!response.ok) {
        setError(`Failed to fetch data: ${response.status}`);
        setMovieList([]);
        return;
      }

      const data = await response.json();
      setMovieList(data.results);

      if (data.results.length === 0) {
        setError("No movies found with that name");
        setMovieList([]);
        return;
      }
      
    } catch (err) {
      console.error(err);
      setError("Something went wrong! Try Again!!!");
    } 
    finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-[#141414] min-h-screen text-white p-10 ">
      <div className="flex gap-2">
<h1 className="text-[#E50914] text-2xl">FILMFINDER </h1>
      <img className="h-8 w-8" src="/movie-search-app/favicon.svg" alt="FilmFinder logo" />

      </div>
      
      <SearchBar
        keyword={searchTerm}
        onChange={handleEventChange}
        onSearch={handleSearch}
      />
      {error && <p className="text-[#a37b7b] text-xl flex justify-center p-4">{error}</p>}
      {loading && <p>Loading...</p>}
      {selectedMovie && (
        <MovieModal selectedMovie={selectedMovie} closeModal={closeModal} />
      )}

      <MovieGrid
        modalHandler={modalHandler}
        movieList={movieList}
      />
    </div>
  );
}

export default App;
