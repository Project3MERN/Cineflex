import React from "react";
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
      <h1 className="movies-title">Movies</h1>
      {movies.map((movie) => {
        return (
          <div className="movie_list" key={movie._id}>
            <div>
            <p>{movie.name}</p>
            <p className="rating">{movie.averageScore}</p>
            <Link className="movie_link" to={`/movie/${movie._id}`}>
              <p>
                <u>View Reviews &rarr;</u>
              </p>
            </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
