import React from 'react';
// import Comment from './Comment';
import "../css/post.css"

function Post() {

    return(
        <div className = "PostCard">
            <div className = "PostDetails">
                <h3>{title}</h3>
                <p> by {user} </p>
                <p className = "Rating">{rating}/5</p>
                <p>{review}</p>
                <span></span>
            </div>
        </div>
    )
}

export default Post;