import React, { useState } from "react";

function CreatePost(props) {

    const {
        posts,
        setPosts
    } = props
    

    const [title, setTitle] = useState('')
    const [review, setReview] = useState('')
    const [rating, setRating] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if(title && review && rating) {
            const newPost = {title, review, rating};
            console.log(newPost);
            setPosts(...posts, {newPost})
        } else {
            console.error(e);
        }
    }

    

    return (
        <div className="createPost-formWrapper">
            <form
                className="createPost-form" 
                onSubmit={handleSubmit}>
                <label
                    className="createPost-label"
                    htmlFor='title'
                    >Title
                </label>
                <input
                    className="createPost-input"
                    type='text'
                    name='title'
                    id='title'
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label
                    className="createPost-label"
                    htmlFor='review'
                    >Review
                </label>
                <input
                    className="createPost-input-review"
                    type='text'
                    name='review'
                    id='review'
                    value={review}
                    onChange={(e) => setReview(e.target.value)}
                />
                <label
                    className="createPost-label"
                    htmlFor='rating'
                    >Rating
                </label>
                <input
                    className="createPost-input"
                    type='number'
                    min='1'
                    name='rating'
                    id='rating'
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <button className="createPost-btn">
                    Create Post
                </button>
            </form>

            <div value={posts}></div>
            
        </div>
    )
}

export default CreatePost;