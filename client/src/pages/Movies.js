import React, { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALLMOVIES } from "../utils/queries";
import "../css/movies.css";
import { Link } from "react-router-dom";

const Movie = () => {
  const { loading, data } = useQuery(GET_ALLMOVIES);
  const movies = data?.allMovies || {};
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="movies">
      <h1>Movies</h1>
      {movies.map((movie) => {
        return (
          <div className="movie_list" key={movie._id}>
            <p>{movie.name}</p>
            <p className="rating">{movie.averageScore}</p>
            <Link className="movie_link" to={`/movie/${movie._id}`}>
              <p>
                <u>View reviews made on this movie</u>
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
