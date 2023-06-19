import React, { useCallback, useEffect, useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState(null);

  // const movieURL = "https://swapi.py4e.com/api/films";
  const movieURL =
    "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json";
  const fetchMovieHandler = () => {
    setisLoading(true);
    setError(null);
    fetch(movieURL)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("something went wrong");
      })
      .then((data) => {
        let results = data.results;
        let result = results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        });
        setMovieList(result);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setisLoading(false);
      });
  };
  //this works same as

  // useEffect(() => {
  //   fetchMovieHandler();
  // }, []);

  //as below(cause we should add all dependancy(fetchMovieHandler) in the array of useEffect)
  //like this...
  //but this will cause infininte loop as fetchMovieHandler reference will be changed at each render

  // useEffect(() => {
  //   fetchMovieHandler();
  // }, [fetchMovieHandler]);

  // ideal solution:

  // as fetchmovie was changing at each render causing the infinite loop, we are using useCallback
  // so that fetch movie is not created on new renders
  // then using useEffect

  const fetchMovie = useCallback(async () => {
    setisLoading(true);
    setError(null);
    fetch(movieURL)
      .then((res) => {
        if (res.ok) return res.json();
        else throw new Error("something went wrong");
      })
      .then((data) => {
        let results = data.results;
        let result = results.map((movie) => {
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
          };
        });
        setMovieList(result);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setisLoading(false);
      });
  }, [movieURL]);

  useEffect(() => {
    fetchMovie();
  }, [fetchMovie]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMovie}>Fetch Movies</button>
      </section>
      <section>
        {isLoading && <p>Loading Movies...</p>}
        {!isLoading && movieList.length > 0 && (
          <MoviesList movies={movieList} />
        )}
        {!isLoading && error && <p>{error}</p>}
      </section>
      <></>
    </React.Fragment>
  );
}

export default App;
