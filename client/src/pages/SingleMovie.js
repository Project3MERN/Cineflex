import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { SINGLE_MOVIE } from "../utils/queries";
import Auth from "../utils/auth";
import ReviewInMovie from "../components/ReviewInMovie";

const SingleMovie = () => {
    const { id: movieId } = useParams();
    const loggedIn = Auth.loggedIn();
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
            <div >
                <h1>{movies.name}</h1>
                {loggedIn && <>
                    <h2>Write a Review</h2>
                    <ReviewInMovie movieName={movies.name}></ReviewInMovie>
                </>}
                <h2>Reviews:</h2>
                {movies.reviews.map(review => {
                    return (
                        <div className="movie_list" key={review._id}>
                            <p className="rating">Text: {review.reviewText}</p>
                            <p>Score: {review.score}/5</p>
                            <p className="rating">By: {review.username}</p>
                        </div>
                    )
                })}
            </div>
        )
    }

}



export default SingleMovie