import React from "react";
import { REMOVE_REVIEW } from "../utils/mutations";
import { useMutation } from "@apollo/client";
import { LOGGED_IN_USER, GET_ALLREVIEWS, GET_ALLMOVIES } from '../utils/queries'
import reviewImage from '../assets/images/profileReviewImage.png'
import "../css/post.css";



function RemoveReview({ review }) {

    const [removeReview] = useMutation(REMOVE_REVIEW, {
        update(cache, { data: { removeReview } }) {
            console.log(removeReview)
            try {
                const { loggedInUser } = cache.readQuery({ query: LOGGED_IN_USER });
                const allReviews = cache.readQuery({ query: GET_ALLREVIEWS })
                const allMovieData = cache.readQuery({ query: GET_ALLMOVIES })
                cache.writeQuery({
                    query: LOGGED_IN_USER,
                    data: { loggedInUser: { ...loggedInUser, reviews: [...loggedInUser.reviews, removeReview] } }
                })
                cache.writeQuery({
                    query: GET_ALLREVIEWS,
                    data: {
                        allReviews: {
                            ...allReviews,
                            removeReview
                        }
                    }
                })
                cache.writeQuery({
                    query: GET_ALLMOVIES,
                    data: {
                        allMovies: {
                            ...allMovieData,
                            removeReview
                        }
                    }
                })
            } catch (e) {
                console.warn(e)
            }
        }
    })

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
        <div className="profileCard">
            <div className="profileReviewImage">
                <img src={reviewImage} alt='Movie camera'></img>
            </div>
            <div className="profileReviewContent">
                <h3 className="rating"><b><i>Movie:</i></b> {review.movie[0].name}</h3>
                <p className="rating"><b><i>Review:</i></b> {review.reviewText}</p>
                <p className="rating"><b><i>Score:</i></b> {review.score}</p>
            </div>
            <button className="reviewButton" onClick={handleClick}>Remove Review</button>
        </div>
    )
}
export default RemoveReview