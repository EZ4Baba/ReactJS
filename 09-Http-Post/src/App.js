import React, { useState, useEffect, useCallback } from "react";

import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    console.log("fetch movie handler");
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      let movieList = [];
      for (let movie in data) {
        let obj = {
          id: movie,
          title: data[movie].title,
          openingText: data[movie].openingText,
          releaseDate: data[movie].releaseDate,
        };
        movieList.push(obj);
      }
      setMovies(() => {
        return [...movieList];
      });
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const fireBaseURL =
    "https://react-http-5ef60-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json";
  async function addMovieHandler(movie) {
    // post using fetch request
    let response = await fetch(fireBaseURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      fetchMoviesHandler();
    }
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
