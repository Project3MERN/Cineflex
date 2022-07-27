import React from "react";
import { REMOVE_REVIEW } from "../utils/mutations";
import { useMutation } from "@apollo/client";


function RemoveReview({ review }) {
    const [removeReview] = useMutation(REMOVE_REVIEW)

    const handleClick = async () => {
        try {
            await removeReview({
                variables: { reviewId: review._id }
            })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="movie_list">
            <p className="rating">{review.reviewText}</p>
            <p className="rating">{review.score}</p>
            <p>{review.movie[0].name}</p>
            <button onClick={handleClick}>Remove Review</button>
        </div>
    )
}
export default RemoveReview