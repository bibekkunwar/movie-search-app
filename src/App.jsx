import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import MovieModal from "./components/MovieModal";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  function handleEventChange(e) {
    setSearchTerm(e.target.value);
  }


   //modal open and close

    function modalHandler(movie){
      setModal(true);
      setSelectedMovie(movie);
    }

    function closeModal(){
      setModal(false);
      setSelectedMovie(null);
    }

  async function handleSearch() {


    setError(null);
    

    if (searchTerm === "") {
      setError("Please enter a search term");
      setMovieList([]);
      return;
    }
    setLoading(true);
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    );

    if (!response.ok) {
      setError(`Failed to fetch data: ${response.status}`);
      setLoading(false);
      setMovieList([]);
      return;
    }

    const data = await response.json();
    setMovieList(data.results);

    if (data.results.length === 0) {
      setError("No movies found with that name");
      setMovieList([]);
      setLoading(false);
      return;
    }
    setLoading(false);

   
  }

  

  return (
    <div className="bg-[#141414] min-h-screen text-white p-8 ">
      <h1 className="text-[#E50914] text-2xl">FILMFINDER</h1>
      <SearchBar
      keyword={searchTerm}
      onChange={handleEventChange}
      onSearch= {handleSearch}
      />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      {modal && <MovieModal selectedMovie = {selectedMovie} closeModal ={closeModal}/>}

      <MovieGrid modalHandler= {modalHandler} movieList = {movieList.slice(0,10)}  />
      <MovieGrid modalHandler= {modalHandler} movieList={movieList.slice(10)} />
    </div>
  );
}

export default App;
