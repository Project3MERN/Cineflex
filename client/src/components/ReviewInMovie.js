import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { GET_ALLREVIEWS, SINGLE_MOVIE } from '../utils/queries';
import "../css/createPost.css";
import { ADD_REVIEW } from '../utils/mutations';
import { useParams } from 'react-router-dom';

const ReviewInMovie = ({ movieName }) => {
    const { id: movieId } = useParams();
    const [reviewText, setReviewText] = useState("")
    const [score, setScore] = useState('')

    const [addReview, { error }] = useMutation(ADD_REVIEW, {
        update(cache, { data: { addReview } }) {
            try {
                const movieData = cache.readQuery({ query: SINGLE_MOVIE, variables: { id: movieId } });
                const allReviews = cache.readQuery({ query: GET_ALLREVIEWS })
                console.log(allReviews)
                console.log(movieData)
                cache.writeQuery({
                    query: SINGLE_MOVIE,
                    data: { movie: { ...movieData, _id: movieId, name: movieName, reviews: addReview } }
                })
                cache.writeQuery({
                    query: GET_ALLREVIEWS,
                    data: {
                        allReviews: {
                            ...allReviews,
                            addReview
                        }
                    }
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