import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Card from "./Card";
const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("kung fu panda");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_KEY}&s=${title}`);
    const data = await response.json();
    setMovieData(data.Search);
  };
  useEffect(() => {
    searchMovies(searchTerm);
  }, []);

  return (
    <div className="app">
      <h1>MovieSage</h1>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>
      {movieData?.length > 0 ? (
        <div className="container">
          {movieData?.map((movie) => (
            <Card movie={movie} key={movie.imdbID} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
