import React from 'react';
// import Comment from './Comment';

function Post(props) {
    const {
        title,
        review,
        rating
    } = props

    return(
        <div>
            <div>{title}</div>
            <div>{review}</div>
            <div>{rating}</div>
        </div>
    )
}

export default Post;