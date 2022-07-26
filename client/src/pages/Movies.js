import React from "react";
import { useQuery } from "@apollo/client";
import { GET_ALLMOVIES } from "../utils/queries";
import { Link } from 'react-router-dom'

const Movie = () => {
    const { loading, data } = useQuery(GET_ALLMOVIES)
    const movies = data?.allMovies || {}
    if (loading) {
        return <h2>Loading...</h2>
    }
    return (
        <div>
            <h1>Movies</h1>
            {movies.map(movie => {
                return (
                    <div key={movie._id}>
                        <p>{movie.name}</p>
                        <p>{movie.averageScore}</p>
                        <Link to={`/movie/${movie._id}`}>
                            <p>View reviews made on this movie</p>
                        </Link>
                    </div>
                )
            })}
        </div>

    )
}

export default Movie