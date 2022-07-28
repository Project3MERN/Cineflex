import React, { useState } from "react";
import "../css/createPost.css";
import { useMutation } from "@apollo/client";
import { ADD_REVIEW } from "../utils/mutations";
import { useNavigate } from 'react-router-dom';
import { GET_ALLREVIEWS, LOGGED_IN_USER } from '../utils/queries';

function CreatePost() {

    const [movie, setMovie] = useState('')
    const [reviewText, setReviewText] = useState('')
    const [score, setScore] = useState('')
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (movie && reviewText && score) {
            const newPost = { movie, reviewText, score }
            try {
                // add review to db
                await addReview({
                    variables: { ...newPost }
                });

                setMovie('');
                setReviewText('');
                setScore('');

                // redirect to explore page
                // navigate('/explore');
            } catch (err) {
                console.error(JSON.stringify(err));
            }
        } else {
            console.error(e);
        }
    }

    const [addReview, { error }] = useMutation(ADD_REVIEW, {
        update(cache, { data: { addReview } }) {
            // read what is in cache
            const newPost = { movie, reviewText, score }
            const { allReviews } = cache.readQuery({ query: GET_ALLREVIEWS });
            const loggedInUser = cache.readQuery({ query: LOGGED_IN_USER })
            console.log(allReviews);

            // prepend newest review to front of array
            cache.writeQuery({
                query: GET_ALLREVIEWS,
                data: {
                    allReviews: {
                        ...allReviews,
                        addReview
                    }
                }
            });
            cache.writeQuery({
                query: LOGGED_IN_USER,
                data: { loggedInUser: { ...loggedInUser, reviews: [...loggedInUser.loggedInUser.reviews, addReview] } }
            })
        }
    });

    return (
        <div className="createPost-formWrapper">
            <form
                className="createPost-form"
                onSubmit={handleSubmit}>
                <label
                    className="createPost-label"
                    htmlFor='movie'
                >Movie
                </label>
                <input
                    className="createPost-input"
                    type='text'
                    name='movie'
                    id='movie'
                    value={movie}
                    onChange={(e) => setMovie(e.target.value)}
                />
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

        </div>
    )
}

export default CreatePost;