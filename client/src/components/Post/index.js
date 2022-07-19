import React from 'react';
import Comment from '../Comment';

function Post() {
    return(
        <div>
            <div>
                <div>Title</div>
                <div>Username</div>
                <div>Post Content</div>
                <Comment />
            </div>
        </div>
    )
}

export default Post;