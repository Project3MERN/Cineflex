import React from 'react';
// import Comment from './Comment';
import "../css/post.css"
import Comment from './Comment';

function Post() {

    return(
        <>
            <div className = "PostCard">
                <div className = "PostDetails">
                    <h3>Test Title</h3>
                    <p>test user</p>
                    <p className = "Rating">5</p>
                    <p>lorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    <span></span>
                </div>
            </div>
            <Comment />
        </>
    )
}

export default Post;