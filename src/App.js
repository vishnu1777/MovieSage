import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Card from "./Card";
import { fetchFromAPI, fetchFromAPIOnce } from "./utils/fetchFromApi";
const API_KEY = "http://www.omdbapi.com/?i=tt3896198&apikey=5cfea68e";

const App = () => {
  const [movieData, setMovieData] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    const response = fetchFromAPIOnce().then((data) => setMovieData(data));
  }, []);

  return (
    <div className="app">
      <h1>MovieSpot</h1>
      {/* <div className="search">
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Enter number to get movie"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div> */}
      {movieData?.length > 0 ? (
        <div className="container">
          {movieData?.map((movie) => (
            <Card movie={movie} key={movie.rank} />
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
