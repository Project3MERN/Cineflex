import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { SINGLE_MOVIE } from "../utils/queries";

const SingleMovie = () => {
    const { id: movieId } = useParams();
    console.log(movieId)

    const { loading, data } = useQuery(SINGLE_MOVIE, {
        variables: { id: movieId }
    })
    const movies = data?.movie || {}

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }

    if (data) {
        return (
            <div>
                <h1>{movies.name}</h1>
                {movies.reviews.map(review => {
                    return (
                        <div key={review._id}>
                            <p>{review.reviewText}</p>
                            <p>{review.score}</p>
                            <p>{review.username}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}



export default SingleMovie