import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALLREVIEWS, GET_ALLMOVIES, LOGGED_IN_USER } from '../utils/queries';
import "../css/createPost.css";
import { ADD_REVIEW } from '../utils/mutations';
// import { useParams } from 'react-router-dom';

const ReviewInMovie = ({ movieName }) => {
    // const { id: movieId } = useParams();
    const [reviewText, setReviewText] = useState("")
    const [score, setScore] = useState('')

    const [addReview, { error }] = useMutation(ADD_REVIEW, {
        update(cache, { data: { addReview } }) {
            console.log(addReview)
            try {
                // const movieData = cache.readQuery({ query: SINGLE_MOVIE, variables: { id: movieId } });
                const allReviews = cache.readQuery({ query: GET_ALLREVIEWS })
                const allMovieData = cache.readQuery({ query: GET_ALLMOVIES })
                const loggedInUser = cache.readQuery({ query: LOGGED_IN_USER });
                console.log(loggedInUser.loggedInUser)

                // console.log(allReviews)
                // console.log(movieData)
                // cache.writeQuery({
                //     query: SINGLE_MOVIE,
                //     data: { movie: { ...movieData.reviews, reviews: { _id: movieId, reviewText: reviewText, score: score, name: movieName } } }
                // })
                cache.writeQuery({
                    query: GET_ALLREVIEWS,
                    data: {
                        allReviews: {
                            ...allReviews,
                            addReview
                        }
                    }
                })
                cache.writeQuery({
                    query: GET_ALLMOVIES,
                    data: {
                        allMovies: {
                            ...allMovieData,
                            addReview
                        }
                    }
                })
                cache.writeQuery({
                    query: LOGGED_IN_USER,
                    data: { loggedInUser: { ...loggedInUser, reviews: [...loggedInUser.loggedInUser.reviews, addReview] } }
                })
            } catch (err) {
                console.log(err)
            }
        }
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (reviewText && score) {
            try {
                await addReview({
                    variables: { reviewText, score, movie: movieName }
                })
                setReviewText('')
                setScore('')
            } catch (err) {
                console.log(err)
            }
        }
    }
    return (
        <div className="createPost-formWrapper">
            <form
                className="createPost-form"
                onSubmit={handleSubmit}>
                <label
                    className="createPost-label"
                    htmlFor='reviewText'
                >Review
                </label>
                <textarea
                    className="createPost-input-review"
                    type='text'
                    name='reviewText'
                    id='reviewText'
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                />
                <label
                    className="createPost-label"
                    htmlFor='score'
                >Rating
                </label>
                <input
                    className="createPost-input"
                    type='number'
                    min='1'
                    max='5'
                    name='score'
                    id='score'
                    value={score}
                    onChange={(e) => setScore(e.target.value)}
                />
                <button type="submit" className="createPost-btn">
                    Create Post
                </button>
                {error && <div>Something went wrong! Please try again.</div>}
            </form>

        </div>)
}
export default ReviewInMovie