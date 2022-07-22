import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import Comment from './Comment';
import "../css/post.css"
import Comment from './Comment';
import PostEdit from './PostEdit';

function Post() {

    const [editSelected, setEditSelected] = useState(false)

    function handleEditSelected() {
        setEditSelected(true)
    }

    function handleEditClose() {
        setEditSelected(false)
    }

    return(
        <>
            <div className = "PostCard">
                <div className='post-edit-delete-btn-wrapper'>
                    <button className='post-delete-btn'>Delete</button>
                    <button
                        className='post-edit-btn'
                        onClick={handleEditSelected}
                    >   
                        Edit
                    </button>
                    {editSelected && <PostEdit handleEditClose={handleEditClose}/>}
                </div>
                <div className = "PostDetails">
                    <h3>
                        {/* <Link to={`/post/${post._id}`}> */}
                        Test Title
                        {/* </Link> */}
                    </h3>
                    <p>
                        {/* <Link to={`user/${post.username}`}> */}
                        test user
                        {/* </Link> */}
                    </p>
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