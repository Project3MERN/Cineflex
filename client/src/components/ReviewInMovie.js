import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALLMOVIES, SINGLE_MOVIE } from '../utils/queries';
import "../css/createPost.css";
import { ADD_REVIEW } from '../utils/mutations';

const ReviewInMovie = ({ movieName, movieId }) => {
    const [reviewText, setReviewText] = useState("")
    const [score, setScore] = useState('')
    const id = movieId
    const [addReview, { error }] = useMutation(ADD_REVIEW, {
        update(cache, { data: { addReview } }) {
            try {
                const { allMovies } = cache.readQuery({ query: SINGLE_MOVIE, variables: { id } })
                console.log(allMovies)
            } catch (e) {
                console.warn(e)
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