import React from 'react';
import Comment from './Comment';

function Post(props) {

    const {
        title,
        review,
        rating
    } = props

    return(
        <div>
            <div>
                <div>{title}</div>
                <div>{review}</div>
                <div>{rating}</div>
                <Comment />
            </div>
        </div>
    )
}

export default Post;